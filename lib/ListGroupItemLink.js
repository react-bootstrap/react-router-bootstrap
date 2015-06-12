'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapLibListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var _reactBootstrapLibListGroupItem2 = _interopRequireDefault(_reactBootstrapLibListGroupItem);

var _LinkMixin = require('./LinkMixin');

var _LinkMixin2 = _interopRequireDefault(_LinkMixin);

var LinkGroupItemLink = _react2['default'].createClass({
  displayName: 'LinkGroupItemLink',

  mixins: [_LinkMixin2['default']],
  contextTypes: {
    router: _react2['default'].PropTypes.func.isRequired
  },

  render: function render() {
    var _props = this.props;
    var to = _props.to;
    var params = _props.params;
    var query = _props.query;
    var active = _props.active;

    var props = _objectWithoutProperties(_props, ['to', 'params', 'query', 'active']);

    if (this.props.active === undefined) {
      active = this.context.router.isActive(to, params, query);
    }

    return _react2['default'].createElement(
      _reactBootstrapLibListGroupItem2['default'],
      _extends({}, props, {
        href: this.getHref(),
        active: active,
        onClick: this.handleRouteTo,
        ref: 'listGroupItem' }),
      this.props.children
    );
  }
});

exports['default'] = LinkGroupItemLink;
module.exports = exports['default'];