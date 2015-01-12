var React = require('react');
var Router = require('react-router')
var { Route, DefaultRoute, RouteHandler } = Router;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>React-Router-Bootstrap Module Visual Test</h1>
        <RouteHandler />
      </div>
    )
  }
});

var routes = (
  <Route handler={App} path="/">
    <Route name='home' path='/' handler={require('./home')} />
    <Route name='button' handler={require('./ButtonVisual')} />
    <Route name='nav-item' handler={require('./NavItemVisual')} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
