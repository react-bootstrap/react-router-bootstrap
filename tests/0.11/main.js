var React = window.React = require('react');

var ReactRouter = require('react-router')
  , State = ReactRouter.State;

var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , ButtonLink = ReactRouterBootstrap.ButtonLink;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <b>{'<NavItemLink to="destination" firstParam="hello" secondParam="world">Linky</NavItemLink>'}</b><br />
        <Nav>
          <NavItemLink
            to="destination"
            firstParam="hello"
            secondParam="navlinky">
            Test linky without query params
          </NavItemLink>
        </Nav><br />
        <b>{'<NavItemLink to="destination" firstParam="hello" secondParam="world" query={{firstQuery: \'hello\', secondQuery: \'there\'}}>Linky</NavItemLink>'}</b><br />
        <Nav>
          <NavItemLink
            to="destination"
            firstParam="hello"
            secondParam="navlinky-with-query-params"
            query={{firstQuery: 'hello', secondQuery: 'navlinky'}}>
            Test linky with query params
          </NavItemLink>
        </Nav><br />
        <b>{'<ButtonLink to="destination" firstParam="hello" secondParam="world">Linky</ButtonLink>'}</b><br />
        <ButtonLink
          to="destination"
          firstParam="hello"
          secondParam="buttonlinky">
          Button linky without query params
        </ButtonLink><br />
        <b>{'<ButtonLink to="destination" firstParam="hello" secondParam="world" query={{firstQuery: \'hello\', secondQuery: \'there\'}}>>Linky</ButtonLink>'}</b><br />
        <ButtonLink
          to="destination"
          firstParam="hello"
          secondParam="buttonlinky-with-query-params"
          query={{firstQuery: 'hello', secondQuery: 'buttonlinky'}}>
          Button linky with query params
        </ButtonLink><br />
        <RouteHandler />
      </div>
    );
  }
});

var Destination = React.createClass({
  mixins: [State],

  render: function() {
    return (
      <div>
        <h1>Button seems to work! =)</h1>
        <b>getParams</b><br />
        {JSON.stringify(this.getParams())}<br />
        <b>getQuery</b><br />
        {JSON.stringify(this.getQuery())}
      </div>
    );
  }
});

var routes = (
  <Route handler={App} path="/">
    <Route name="destination" path="destination/:firstParam/:secondParam" handler={Destination} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
