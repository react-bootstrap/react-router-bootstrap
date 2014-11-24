var ADDITIONAL_RESERVED_PROPS, IsActiveMixin, NavItem, NavItemLink, React, ReactBootstrap, RouteToMixin, assign;

React = require('react');

ReactBootstrap = require('react-bootstrap');

NavItem = ReactBootstrap.NavItem;

IsActiveMixin = require('./IsActiveMixin');

RouteToMixin = require('./RouteToMixin');

assign = require('react/lib/Object.assign');

if (!Object.assign) {
  Object.assign = assign;
}

ADDITIONAL_RESERVED_PROPS = {
  active: true,
  activeHref: true,
  activeKey: true,
  key: true,
  navItem: true,
  onSelect: true,
  ref: true
};

NavItemLink = React.createClass({
  displayName: 'NavItemLink',
  mixins: [IsActiveMixin],
  additionalReservedProps: ADDITIONAL_RESERVED_PROPS,
  render: function() {
    return React.createElement(NavItem, Object.assign({}, this.props, {
      "href": this.getHref()
    }, {
      "active": this.state.isActive
    }, {
      "onClick": this.handleRouteTo
    }), this.props.children);
  }
});

module.exports = NavItemLink;
