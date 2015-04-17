var React = require('react');
var classSet = require('classnames');

var MenuItem = require('react-bootstrap/lib/MenuItem');
var LinkMixin = require('./LinkMixin');

var joinClasses = require('react/lib/joinClasses');

var MenuItemLink = React.createClass({displayName: "MenuItemLink",
  mixins: [
    LinkMixin
  ],
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {
    var $__0=
      
      
      
      
      
                 
        this.props,to=$__0.to,params=$__0.params,query=$__0.query,active=$__0.active,className=$__0.className,onSelect=$__0.onSelect,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{to:1,params:1,query:1,active:1,className:1,onSelect:1});

    if (this.props.active === undefined) {
      active = this.context.router.isActive(to, params, query);
    }

    return (
      React.createElement(MenuItem, React.__spread({},  props, 
        {href: this.getHref(), 
        className:  joinClasses(className, classSet({ active: active })), 
        onClick: this.handleRouteTo, 
        ref: "menuItem"}), 
        this.props.children
      )
    );
  }
});

module.exports = MenuItemLink;
