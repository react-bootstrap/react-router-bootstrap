var React = window.React = require('react');

var ReactRouter = require('react-router')
  , ActiveState = ReactRouter.ActiveState;

var Router = require('react-router')
  , Routes = Router.Routes
  , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , ButtonLink = ReactRouterBootstrap.ButtonLink;

var App = React.createClass({
  render: function() {
    var ActiveRouteHandler = this.props.activeRouteHandler;

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
        <ActiveRouteHandler />
      </div>
    );
  }
});

var Destination = React.createClass({
  mixins: [ActiveState],

  render: function() {
    return (
      <div>
        <h1>Button seems to work! =)</h1>
        <b>getActiveParams</b><br />
        {JSON.stringify(this.getActiveParams())}<br />
        <b>getActiveQuery</b><br />
        {JSON.stringify(this.getActiveQuery())}
      </div>
    );
  }
});

var routes = (
  <Routes>
    <Route handler={App} path="/">
      <Route name="destination" path="destination/:firstParam/:secondParam" handler={Destination} />
    </Route>
  </Routes>
);

React.renderComponent(routes, document.body);
