/* globals describe, it, assert, expect */

import React from 'react/addons';
import ThumbnailLink from '../src/ThumbnailLink';
import Router, { Route } from 'react-router';
import { Foo } from './TestHandlers';
import TestLocation from 'react-router/lib/locations/TestLocation';
let { click } = React.addons.TestUtils.Simulate;

describe('A ThumbnailLink', function () {
  describe('with params and a query', function () {
    it('knows how to make its href', function () {
      let ThumbnailLinkHandler = React.createClass({
        render() {
          return <ThumbnailLink to="foo" params={{bar: 'baz'}} query={{qux: 'quux'}} />;
        }
      });

      let routes = [
        <Route name="foo" path="foo/:bar" handler={Foo} />,
        <Route name="link" handler={ThumbnailLinkHandler} />
      ];

      let div = document.createElement('div');
      let testLocation = new TestLocation();
      testLocation.history = ['/link'];

      Router.run(routes, testLocation, function (Handler) {
        React.render(<Handler/>, div, function () {
          let a = div.querySelector('a');
          expect(a.getAttribute('href')).to.equal('/foo/baz?qux=quux');
        });
      });
    });
  });

  describe('when clicked', function () {
    it('calls a user defined click handler', function (done) {
      let ThumbnailLinkHandler = React.createClass({
        handleClick(event) {
          assert.ok(true);
          done();
        },

        render() {
          return <ThumbnailLink to="foo" onClick={this.handleClick} />;
        }
      });

      let routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={ThumbnailLinkHandler} />
      ];
      let div = document.createElement('div');
      let testLocation = new TestLocation();
      testLocation.history = ['/link'];

      Router.run(routes, testLocation, function (Handler) {
        React.render(<Handler/>, div, function () {
          click(div.querySelector('a'));
        });
      });
    });

    it('transitions to the correct route', function (done) {
      let div = document.createElement('div');
      let testLocation = new TestLocation();
      testLocation.history = ['/link'];

      let ThumbnailLinkHandler = React.createClass({
        handleClick() {
          // just here to make sure click handlers don't prevent it from happening
        },

        render() {
          return <ThumbnailLink to="foo" onClick={this.handleClick} />;
        }
      });

      let routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={ThumbnailLinkHandler} />
      ];

      let steps = [];

      steps.push(function () {
        click(div.querySelector('a'), {button: 0});
      });

      steps.push(function () {
        expect(div.innerHTML).to.match(/Foo/);
        done();
      });

      Router.run(routes, testLocation, function (Handler) {
        React.render(<Handler/>, div, function () {
          steps.shift()();
        });
      });
    });

  });

});
