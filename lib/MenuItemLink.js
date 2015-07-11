'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibMenuItem = require('react-bootstrap/lib/MenuItem');

var _reactBootstrapLibMenuItem2 = _interopRequireDefault(_reactBootstrapLibMenuItem);

var _LinkMixin = require('./LinkMixin');

var _LinkMixin2 = _interopRequireDefault(_LinkMixin);

var MenuItemLink = _react2['default'].createClass({
  displayName: 'MenuItemLink',

  mixins: [_LinkMixin2['default']],

  render: function render() {
    var props = this.getLinkProps();
    delete props.onSelect; // this is done on the copy of this.props

    return _react2['default'].createElement(
      _reactBootstrapLibMenuItem2['default'],
      _extends({}, props, { ref: 'menuItem' }),
      this.props.children
    );
  }
});

exports['default'] = MenuItemLink;
module.exports = exports['default'];