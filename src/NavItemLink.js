var React = require('react');

var NavItem = require('react-bootstrap/lib/NavItem');
var LinkMixin = require('./LinkMixin');

var NavItemLink = React.createClass({
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
      ...props} = this.props;

    if (this.props.active === undefined) {
      active = this.context.router.isActive(to, params, query);
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
