/* globals describe, it, assert, expect */

import React from 'react/addons';
import NavItemLink from '../src/NavItemLink';
import Router, { Route, RouteHandler } from 'react-router';
import { Foo, Bar } from './TestHandlers';
import TestLocation from 'react-router/lib/locations/TestLocation';
const { click } = React.addons.TestUtils.Simulate;

describe('A NavItemLink', function() {
  describe('with params and a query', function() {
    it('knows how to make its href', function() {
      const NavItemLinkHandler = React.createClass({
        render() {
          return <NavItemLink to="foo" params={{bar: 'baz'}} query={{qux: 'quux'}}>NavItemLink</NavItemLink>;
        }
      });

      const routes = [
        <Route name="foo" path="foo/:bar" handler={Foo} />,
        <Route name="link" handler={NavItemLinkHandler} />
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
      const NavItemLinkHandler = React.createClass({
        render() {
          return (
            <div>
              <NavItemLink
                to="foo"
                className="dontKillMe"
              >NavItemLink</NavItemLink>
              <RouteHandler/>
            </div>
          );
        }
      });

      const routes = (
        <Route path="/" handler={NavItemLinkHandler}>
          <Route name="foo" handler={Foo} />
          <Route name="bar" handler={Bar} />
        </Route>
      );

      const div = document.createElement('div');
      const testLocation = new TestLocation();
      testLocation.history = ['/foo'];
      const steps = [];

      function assertActive() {
        const a = div.querySelector('li');
        expect(a.className.split(' ').sort().join(' ')).to.equal('active dontKillMe');
      }

      function assertInactive() {
        const a = div.querySelector('li');
        expect(a.className).to.equal('dontKillMe');
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
      const NavItemLinkHandler = React.createClass({
        handleClick(event) {
          assert.ok(true);
          done();
        },

        render() {
          return <NavItemLink to="foo" onClick={this.handleClick}>NavItemLink</NavItemLink>;
        }
      });

      const routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={NavItemLinkHandler} />
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

    it('when disabled does not proceed', function() {
      const NavItemLinkHandler = React.createClass({
        handleClick(event) {
          throw new Error('click should not be called');
        },

        render() {
          return <NavItemLink to="foo" disabled onClick={this.handleClick}>NavItemLink</NavItemLink>;
        }
      });

      const routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={NavItemLinkHandler} />
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

      const NavItemLinkHandler = React.createClass({
        handleClick() {
          // just here to make sure click handlers don't prevent it from happening
        },

        render() {
          return <NavItemLink to="foo" onClick={this.handleClick}>NavItemLink</NavItemLink>;
        }
      });

      const routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={NavItemLinkHandler} />
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
