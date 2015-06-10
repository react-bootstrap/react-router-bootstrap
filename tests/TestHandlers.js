import React from 'react';
import { RouteHandler } from 'react-router';

exports.Nested = React.createClass({
  render() {
    return (
      <div>
        <h1 className="Nested">Nested</h1>
        <RouteHandler />
      </div>
    );
  }
});

exports.Foo = React.createClass({
  render() {
    return <div className="Foo">Foo</div>;
  }
});

exports.Bar = React.createClass({
  render() {
    return <div className="Bar">Bar</div>;
  }
});

exports.Baz = React.createClass({
  render() {
    return <div className="Baz">Baz</div>;
  }
});
