var ADDITIONAL_RESERVED_PROPS, Button, ButtonLink, React, RouteToMixin, assign;

React = require('react');

Button = require('react-bootstrap/Button');

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
