var React = require('react');
var classSet = require('classnames');

var MenuItem = require('react-bootstrap/lib/MenuItem');
var LinkMixin = require('./LinkMixin');

var MenuItemLink = React.createClass({
  mixins: [
    LinkMixin
  ],
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {
    var {
      to,
      params,
      query,
      active,
      onSelect, // Not going to use this, just stripping off the props!
      ...props} = this.props;

    if (active === undefined) {
      active = this.context.router.isActive(to, params, query);
    }

    return (
      <MenuItem
        {...props}
        href={this.getHref()}
        active={active}
        onClick={this.handleRouteTo}
        ref="menuItem"
      >
        {this.props.children}
      </MenuItem>
    );
  }
});

module.exports = MenuItemLink;
