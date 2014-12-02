var React = require('react');

var NavItem = require('react-bootstrap/NavItem')

var Navigation = require('react-router/modules/mixins/Navigation');
var ActiveState = require('react-router/modules/mixins/ActiveState');

var helpers = require('./helpers');

ADDITIONAL_RESERVED_PROPS = [
  'to',
  'active',
  'activeHref',
  'activeKey',
  'key',
  'navItem',
  'onSelect',
  'ref',
  'children'
];

var NavItemLink = React.createClass({
  mixins: [ActiveState, Navigation],

  additionalReservedProps: ADDITIONAL_RESERVED_PROPS,

  getInitialState: function() {
    return {
      href: '#',
      isActive: false
    }
  },

  componentDidMount: function() {
    var params = this.getCleanedParams();
    var href = this.makeHref(this.props.to, params, this.props.query || null);
    var isActive = this.isActive(this.props.to, params, this.props.query || null);

    this.setState({
      href: href,
      isActive: isActive
    });
  },

  getCleanedParams: function() {
    var reserved = Object.keys(this.refs.navItem.constructor.propTypes)
      .concat(this.additionalReservedProps);

    return helpers.withoutProperties(this.props, reserved || []);
  },

  handleRouteTo: function (e) {
    if (helpers.isModifiedEvent(e) || !helpers.isLeftClick(e)) {
      return;
    }
    e.preventDefault();
    var params = this.getCleanedParams();
    return this.transitionTo(this.props.to, params, this.props.query || null);
  },

  render: function() {
    return (
      <NavItem
        {...this.props}
        href={this.state.href}
        active={this.state.isActive}
        onClick={this.handleRouteTo}
        ref="navItem">
          {this.props.children}
      </NavItem>
    );
  }
});

module.exports = NavItemLink;
