var React = require('react');

var NavItem = require('react-bootstrap/NavItem')
var { Navigation, State } = require('react-router');
var LinkMixin = require('./LinkMixin');

var NavItemLink = React.createClass({
  mixins: [
    LinkMixin,
    Navigation,
    State
  ],

  render: function() {
    var {
      to,
      params,
      query,
      active,
      ...props} = this.props;

    if (this.props.active === undefined) {
      active = this.isActive(to, params, query);
    }

    return (
      <NavItem {...props}
        href={this.getHref()}
        active={active}
        onClick={this.handleRouteTo}
        ref="navItem">
        {this.props.children}
      </NavItem>
    );
  }
});

module.exports = NavItemLink;
