'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibNavItem = require('react-bootstrap/lib/NavItem');

var _reactBootstrapLibNavItem2 = _interopRequireDefault(_reactBootstrapLibNavItem);

var _LinkMixin = require('./LinkMixin');

var _LinkMixin2 = _interopRequireDefault(_LinkMixin);

var NavItemLink = _react2['default'].createClass({
  displayName: 'NavItemLink',

  mixins: [_LinkMixin2['default']],

  render: function render() {
    return _react2['default'].createElement(
      _reactBootstrapLibNavItem2['default'],
      _extends({}, this.getLinkProps(), { ref: 'navItem' }),
      this.props.children
    );
  }
});

exports['default'] = NavItemLink;
module.exports = exports['default'];