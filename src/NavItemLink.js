var React = require('react');

var NavItem = require('react-bootstrap/NavItem')

var Navigation = require('react-router/modules/mixins/Navigation');
var State = require('react-router/modules/mixins/State');

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
  mixins: [State, Navigation],

  additionalReservedProps: ADDITIONAL_RESERVED_PROPS,

  getInitialState: function() {
    return {
      href: '#'
    }
  },

  componentDidMount: function() {
    var params = this.getCleanedParams();
    var href = this.makeHref(this.props.to, params, this.props.query || null);

    this.setState({
      href: href
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
        active={this.isActive(this.props.to)}
        onClick={this.handleRouteTo}
        ref="navItem">
          {this.props.children}
      </NavItem>
    );
  }
});

module.exports = NavItemLink;
