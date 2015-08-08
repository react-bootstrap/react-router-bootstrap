# react-router-bootstrap

[![Build Status](https://travis-ci.org/react-bootstrap/react-router-bootstrap.svg?branch=master)](https://travis-ci.org/react-bootstrap/react-router-bootstrap)

Intregation between [react-router](https://github.com/rackt/react-router) and [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)

This package gives you react-router compatible substitutes for:

- `NavItem` -> `NavItemLink`
- `Button` -> `ButtonLink`
- `MenuItem` -> `MenuItemLink`
- `ListGroupItem` -> `ListGroupItemLink`
- `PageItem` -> `PageItemLink`
- `Thumbnail` -> `ThumbnailLink`

Turning this:

```jsx
React.createClass({
  mixins: [State, Navigation],

  render: function() {
    var href = this.makeHref('destination', {some: 'params'}, {some: 'query param'});
    var isActive = this.isActive('destination', {some: 'params'}, {some: 'query param'});
    return <Button href={href} active={isActive}>;
  }
});
```

Into this

```jsx
React.createClass({
  render: function() {
    return <ButtonLink to="destination" params={{ some: 'params' }} query={{some: 'query param'}}>;
  }
});
```

## Installation

```
npm install --save react-router-bootstrap
```

You will also (if you haven't already) want to install `react-router` and `react-bootstrap`

```
npm install --save react-router react-bootstrap
```

## Usage

A simple example

```jsx
var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav
  , ListGroup = ReactBootstrap.ListGroup;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , ButtonLink = ReactRouterBootstrap.ButtonLink
  , ListGroupItemLink = ReactRouterBootstrap.ListGroupItemLink;

var App = React.createClass({
  render: function() {
    return (
      <div>
        NavItemLink<br />
        <Nav>
          <NavItemLink
            to="destination"
            params={{ someparam: 'hello' }}>
            Linky!
          </NavItemLink>
        </Nav>
        <br />
        ButtonLink<br />
        <ButtonLink
          to="destination"
          params={{ someparam: 'hello' }}>
          Linky!
        </ButtonLink>
        <br />
        <ListGroup>
          <ListGroupItemLink
            to="destination"
            params={{ someparam: 'hello' }}>
            Linky!
          </ListGroupItemLink>
        </ListGroup>
        <RouteHandler />
      </div>
    );
  }
});

var Destination = React.createClass({
  render: function() {
    return <div>You made it!</div>;
  }
});

var routes = (
  <Route handler={App} path="/">
    <Route name="destination" path="destination/:someparam" handler={Destination} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md)

Use `npm run visual-test` command to check components appearance in browser. It will open browser with a blank page. Then after `webpack-server` finishes its bundling, the browser automatically will refresh the page.

URL for it: http://localhost:8080/public/visual#/
