'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

exports['default'] = {
  propTypes: {
    active: _react2['default'].PropTypes.bool,
    activeClassName: _react2['default'].PropTypes.string.isRequired,
    disabled: _react2['default'].PropTypes.bool,
    to: _react2['default'].PropTypes.string.isRequired,
    params: _react2['default'].PropTypes.object,
    query: _react2['default'].PropTypes.object,
    onClick: _react2['default'].PropTypes.func
  },
  contextTypes: {
    router: _react2['default'].PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      activeClassName: 'active'
    };
  },

  /**
   * Returns props except those used by this Mixin
   * Gets "active" from router if needed.
   * Gets the value of the "href" attribute to use on the DOM element.
   * Sets "onClick" to "handleRouteTo".
   */
  getLinkProps: function getLinkProps() {
    var _props = this.props;
    var to = _props.to;
    var params = _props.params;
    var query = _props.query;

    var props = _objectWithoutProperties(_props, ['to', 'params', 'query']);

    if (this.props.active === undefined) {
      props.active = this.context.router.isActive(to, params, query);
    }

    props.href = this.context.router.makeHref(to, params, query);

    props.onClick = this.handleRouteTo;

    return props;
  },

  handleRouteTo: function handleRouteTo(event) {
    var allowTransition = true;
    var clickResult = undefined;

    if (this.props.disabled) {
      event.preventDefault();
      return;
    }

    if (this.props.onClick) {
      clickResult = this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (clickResult === false || event.defaultPrevented === true) {
      allowTransition = false;
    }

    event.preventDefault();

    if (allowTransition) {
      this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
    }
  }
};
module.exports = exports['default'];