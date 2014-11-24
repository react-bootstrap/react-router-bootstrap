var Navigation, RESERVED_PROPS, React, RouteToMixin, copyProperties, isLeftClick, isModifiedEvent, withoutProperties;

React = require('react');

Navigation = require('react-router').Navigation;

copyProperties = require('react/lib/copyProperties');

RESERVED_PROPS = {
  to: true,
  className: true,
  activeClassName: true,
  query: true,
  children: true
};

isLeftClick = function(event) {
  return event.button === 0;
};

isModifiedEvent = function(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

withoutProperties = function(object, properties) {
  var property, result;
  result = {};
  for (property in object) {
    if (object.hasOwnProperty(property) && !properties[property]) {
      result[property] = object[property];
    }
  }
  return result;
};

RouteToMixin = {
  mixins: [Navigation],
  getUnreservedProps: function(props, additionalReservedProps) {
    var reservedProps;
    if (additionalReservedProps) {
      reservedProps = copyProperties({}, RESERVED_PROPS);
      reservedProps = copyProperties(reservedProps, additionalReservedProps);
    } else {
      reservedProps = RESERVED_PROPS;
    }
    return withoutProperties(props, reservedProps);
  },
  propTypes: {
    to: React.PropTypes.string.isRequired,
    query: React.PropTypes.object
  },
  getHref: function() {
    var allParams;
    allParams = withoutProperties(this.props, RESERVED_PROPS);
    return this.makeHref(this.props.to, allParams, this.props.query);
  },
  handleRouteTo: function(event) {
    if (isModifiedEvent(event) || !isLeftClick(event)) {
      return;
    }
    event.preventDefault();
    return this.transitionTo(this.props.to, this.getParams(), this.props.query);
  }
};

module.exports = RouteToMixin;
