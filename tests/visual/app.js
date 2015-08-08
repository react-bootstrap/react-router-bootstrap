import React from 'react';
import Router, { Route, RouteHandler } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>React-Router-Bootstrap Module Visual Test</h1>
        <RouteHandler />
      </div>
    );
  }
});

const routes = (
  <Route handler={App} path="/">
    <Route name='home' path='/' handler={require('./home')} />
    <Route name='button' handler={require('./ButtonVisual')} />
    <Route name='nav-item' handler={require('./NavItemVisual')} />
    <Route name='menu-item' handler={require('./MenuItemVisual')} />
    <Route name='list-group-item' handler={require('./ListGroupItemVisual')} />
    <Route name='thumbnail' handler={require('./ThumbnailVisual')} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
