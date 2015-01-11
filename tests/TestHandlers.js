var React = require('react');
var { RouteHandler } = require('react-router');

exports.Nested = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="Nested">Nested</h1>
        <RouteHandler />
      </div>
    );
  }
});

exports.Foo = React.createClass({
  render: function () {
    return <div className="Foo">Foo</div>;
  }
});

exports.Bar = React.createClass({
  render: function () {
    return <div className="Bar">Bar</div>;
  }
});

exports.Baz = React.createClass({
  render: function () {
    return <div className="Baz">Baz</div>;
  }
});
