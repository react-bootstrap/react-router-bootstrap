var ADDITIONAL_RESERVED_PROPS, Button, ButtonLink, React, ReactBootstrap, RouteToMixin, assign;

React = require('react');

ReactBootstrap = require('react-bootstrap');

Button = ReactBootstrap.Button;

RouteToMixin = require('./RouteToMixin');

assign = require('react/lib/Object.assign');

if (!Object.assign) {
  Object.assign = assign;
}

ADDITIONAL_RESERVED_PROPS = {
  key: true,
  ref: true
};

ButtonLink = React.createClass({
  displayName: 'ButtonLink',
  mixins: [RouteToMixin],
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS,
  render: function() {
    return React.createElement(Button, Object.assign({}, this.props, {
      "href": this.getHref()
    }, {
      "onClick": this.handleRouteTo
    }), this.props.children);
  }
});

module.exports = ButtonLink;
