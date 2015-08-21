/* globals describe, it, assert, expect */

import React from 'react/addons';
import MenuItemLink from '../src/MenuItemLink';
import Router, { Route, RouteHandler } from 'react-router';
import { Foo, Bar } from './TestHandlers';
import TestLocation from 'react-router/lib/locations/TestLocation';
const { click } = React.addons.TestUtils.Simulate;

describe('A MenuItemLink', function() {
  describe('with params and a query', function() {
    it('knows how to make its href', function() {
      const MenuItemLinkHandler = React.createClass({
        render() {
          return <MenuItemLink to="foo" params={{bar: 'baz'}} query={{qux: 'quux'}}>MenuItemLink</MenuItemLink>;
        }
      });

      const routes = [
        <Route name="foo" path="foo/:bar" handler={Foo} />,
        <Route name="link" handler={MenuItemLinkHandler} />
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

  describe('when its route is active', function() {
    it('has an active class name', function(done) {
      const MenuItemLinkHandler = React.createClass({
        render() {
          return (
            <div>
              <MenuItemLink
                to="foo"
                className="dontKillMe"
              >MenuItemLink</MenuItemLink>
              <RouteHandler/>
            </div>
          );
        }
      });

      const routes = (
        <Route path="/" handler={MenuItemLinkHandler}>
          <Route name="foo" handler={Foo} />
          <Route name="bar" handler={Bar} />
        </Route>
      );

      const div = document.createElement('div');
      const testLocation = new TestLocation();
      testLocation.history = ['/foo'];
      const steps = [];

      function assertActive() {
        const li = div.querySelector('li');
        expect(li.className.split(' ').sort().join(' ')).to.equal('active dontKillMe');
        const a = div.querySelector('a');
        expect(a.className.split(' ').sort().join(' ')).to.equal('');
      }

      function assertInactive() {
        const li = div.querySelector('li');
        expect(li.className.split(' ').sort().join(' ')).to.equal('dontKillMe');
        const a = div.querySelector('a');
        expect(a.className.split(' ').sort().join(' ')).to.equal('');
      }

      steps.push(() => {
        assertActive();
        testLocation.push('/bar');
      });

      steps.push(() => {
        assertInactive();
        testLocation.push('/foo');
      });

      steps.push(() => {
        assertActive();
        done();
      });

      Router.run(routes, testLocation, function(Handler) {
        React.render(<Handler/>, div, () => {
          steps.shift()();
        });
      });
    });
  });

  describe('when clicked', function() {
    it('calls a user defined click handler', function(done) {
      const MenuItemLinkHandler = React.createClass({
        handleClick(event) {
          assert.ok(true);
          done();
        },

        render() {
          return <MenuItemLink to="foo" onClick={this.handleClick}>MenuItemLink</MenuItemLink>;
        }
      });

      const routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={MenuItemLinkHandler} />
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

      const MenuItemLinkHandler = React.createClass({
        handleClick() {
          // just here to make sure click handlers don't prevent it from happening
        },

        render() {
          return <MenuItemLink to="foo" onClick={this.handleClick}>MenuItemLink</MenuItemLink>;
        }
      });

      const routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={MenuItemLinkHandler} />
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
