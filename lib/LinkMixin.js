'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

exports['default'] = {
  propTypes: {
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
   * Returns the value of the "href" attribute to use on the DOM element.
   */
  getHref: function getHref() {
    return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
  },

  /**
   * Returns the value of the "class" attribute to use on the DOM element, which contains
   * the value of the activeClassName property when this <Link> is active.
   */
  getClassName: function getClassName() {
    var classSet = {};

    if (this.props.className) {
      classSet[this.props.className] = true;
    }

    if (this.context.router.isActive(this.props.to, this.props.params, this.props.query)) {
      _classnames2['default'][this.props.activeClassName] = true;
    }

    return (0, _classnames2['default'])(classSet);
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