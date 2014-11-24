var IsActiveMixin, React, RouteToMixin, State;

React = require('react');

State = require('react-router/modules/mixins/State');

RouteToMixin = require('./RouteToMixin');

IsActiveMixin = {
  mixins: [State, RouteToMixin],
  getInitialState: function() {
    return {
      isActive: false
    };
  },
  componentWillReceiveProps: function(nextProps) {
    var params;
    params = this.getUnreservedProps(nextProps, this.additionalReservedProps);
    return this.setState({
      isActive: this.isActive(nextProps.to, params, nextProps.query)
    });
  },
  updateActiveState: function() {
    return this.setState({
      isActive: this.isActive(this.props.to, this.getParams(), this.props.query)
    });
  }
};

module.exports = IsActiveMixin;
