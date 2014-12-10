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
      params: false
    }
  },

  componentDidMount: function() {
    var params = this.getCleanedParams(this.props);

    this.setState({
      params: params
    });
  },

  getCleanedParams: function(props) {
    var reserved = Object.keys(this.refs.navItem.constructor.propTypes)
      .concat(this.additionalReservedProps);

    return helpers.withoutProperties(props, reserved || []);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({params: this.getCleanedParams(nextProps)});
  },

  render: function() {
    if (this.state.params !== false) {
      var href = this.makeHref(this.props.to, this.state.params, this.props.query || null);
      var active = this.isActive(this.props.to, this.state.params, this.props.query || null);
    } else {
      var href = "#";
      var active = false;
    }

    return (
      <NavItem
        {...this.props}
        href={href}
        active={active}
        ref="navItem">
          {this.props.children}
      </NavItem>
    );
  }
});

module.exports = NavItemLink;
