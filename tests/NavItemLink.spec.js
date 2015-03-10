/* globals describe, it, assert, expect */

var React = require('react/addons');
var NavItemLink = require('../src/NavItemLink');
var Router = require('react-router');
var { Route, RouteHandler } = Router;
var { Foo, Bar } = require('./TestHandlers');
var TestLocation = new require('react-router/locations/TestLocation');
var { click } = React.addons.TestUtils.Simulate;

describe('A NavItemLink', function () {
  describe('with params and a query', function () {
    it('knows how to make its href', function () {
      var NavItemLinkHandler = React.createClass({
        render: function () {
          return <NavItemLink to="foo" params={{bar: 'baz'}} query={{qux: 'quux'}}>NavItemLink</NavItemLink>;
        }
      });

      var routes = [
        <Route name="foo" path="foo/:bar" handler={Foo} />,
        <Route name="link" handler={NavItemLinkHandler} />
      ];

      var div = document.createElement('div');
      TestLocation.history = ['/link'];

      Router.run(routes, TestLocation, function (Handler) {
        React.render(<Handler/>, div, function () {
          var a = div.querySelector('a');
          expect(a.getAttribute('href')).to.equal('/foo/baz?qux=quux');
        });
      });
    });
  });

  describe('when its route is active', function () {
    it('has an active class name', function (done) {
      var NavItemLinkHandler = React.createClass({
        render: function () {
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

      var routes = (
        <Route path="/" handler={NavItemLinkHandler}>
          <Route name="foo" handler={Foo} />
          <Route name="bar" handler={Bar} />
        </Route>
      );

      var div = document.createElement('div');
      TestLocation.history = ['/foo'];
      var steps = [];

      function assertActive () {
        var a = div.querySelector('li');
        expect(a.className.split(' ').sort().join(' ')).to.equal('active dontKillMe');
      }

      function assertInactive () {
        var a = div.querySelector('li');
        expect(a.className).to.equal('dontKillMe');
      }

      steps.push(() => {
        assertActive();
        TestLocation.push('/bar');
      });

      steps.push(() => {
        assertInactive();
        TestLocation.push('/foo');
      });

      steps.push(() => {
        assertActive();
        done();
      });

      Router.run(routes, TestLocation, function (Handler) {
        React.render(<Handler/>, div, () => {
          steps.shift()();
        });
      });
    });
  });

  describe('when clicked', function () {
    it('calls a user defined click handler', function (done) {
      var NavItemLinkHandler = React.createClass({
        handleClick: function (event) {
          assert.ok(true);
          done();
        },

        render: function () {
          return <NavItemLink to="foo" onClick={this.handleClick}>NavItemLink</NavItemLink>;
        }
      });

      var routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={NavItemLinkHandler} />
      ];
      var div = document.createElement('div');
      TestLocation.history = ['/link'];

      Router.run(routes, TestLocation, function (Handler) {
        React.render(<Handler/>, div, function () {
          click(div.querySelector('a'));
        });
      });
    });

    it('transitions to the correct route', function (done) {
      var div = document.createElement('div');
      TestLocation.history = ['/link'];

      var NavItemLinkHandler = React.createClass({
        handleClick: function () {
          // just here to make sure click handlers don't prevent it from happening
        },

        render: function () {
          return <NavItemLink to="foo" onClick={this.handleClick}>NavItemLink</NavItemLink>;
        }
      });

      var routes = [
        <Route name="foo" handler={Foo} />,
        <Route name="link" handler={NavItemLinkHandler} />
      ];

      var steps = [];

      steps.push(function () {
        click(div.querySelector('a'), {button: 0});
      });

      steps.push(function () {
        expect(div.innerHTML).to.match(/Foo/);
        done();
      });

      Router.run(routes, TestLocation, function (Handler) {
        React.render(<Handler/>, div, function () {
          steps.shift()();
        });
      });
    });

  });

});
