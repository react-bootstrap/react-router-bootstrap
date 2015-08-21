/* globals describe, it, assert, expect */

import React from 'react/addons';
import PageItemLink from '../src/PageItemLink';
import Router, { Route } from 'react-router';
import { Foo } from './TestHandlers';
import TestLocation from 'react-router/lib/locations/TestLocation';
const { click } = React.addons.TestUtils.Simulate;

describe('A PageItemLink', function() {
  describe('with params and a query', function() {
    it('knows how to make its href', function() {
      const PageItemLinkHandler = React.createClass({
        render() {
          return <PageItemLink to="foo" params={{bar: 'baz'}} query={{qux: 'quux'}}>PageItemLink</PageItemLink>;
        }
      });

      const routes = [
        <Route name="foo" path="foo/:bar" handler={Foo} />,
        <Route name="link" handler={PageItemLinkHandler} />
      ];

      const div = document.createElement('div');
      const testLocation = new TestLocation();
      testLocation.history = ['/link'];

      Router.run(routes, testLocation, function(Handler) {
        React.render(<Handler/>, div, function() {
          const a = div.querySelector('a');
          expect(a.getAttribute('href')).to.equal('/foo/baz?qux=quux');
        });
      });
    });
  });

  describe('when clicked', function() {
    it('calls a user defined click handler', function(done) {
      const PageItemLinkHandler = React.createClass({
        handleClick(event) {
          assert.ok(true);
          done();
        },

        render() {
          return <PageItemLink to="foo" onClick={this.handleClick}>PageItemLink</PageItemLink>;
        }
      });

      const routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={PageItemLinkHandler} />
      ];
      const div = document.createElement('div');
      const testLocation = new TestLocation();
      testLocation.history = ['/link'];

      Router.run(routes, testLocation, function(Handler) {
        React.render(<Handler/>, div, function() {
          click(div.querySelector('a'));
        });
      });
    });

    it('transitions to the correct route', function(done) {
      const div = document.createElement('div');
      const testLocation = new TestLocation();
      testLocation.history = ['/link'];

      const PageItemLinkHandler = React.createClass({
        handleClick() {
          // just here to make sure click handlers don't prevent it from happening
        },

        render() {
          return <PageItemLink to="foo" onClick={this.handleClick}>PageItemLink</PageItemLink>;
        }
      });

      const routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={PageItemLinkHandler} />
      ];

      const steps = [];

      steps.push(function() {
        click(div.querySelector('a'), {button: 0});
      });

      steps.push(function() {
        expect(div.innerHTML).to.match(/Foo/);
        done();
      });

      Router.run(routes, testLocation, function(Handler) {
        React.render(<Handler/>, div, function() {
          steps.shift()();
        });
      });
    });
  });
});
