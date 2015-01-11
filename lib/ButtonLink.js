var React = require('react');

var Button = require('react-bootstrap/Button');
var $__0=     require('react-router'),Navigation=$__0.Navigation,State=$__0.State;
var LinkMixin = require('./LinkMixin');

var ButtonLink = React.createClass({displayName: "ButtonLink",
  mixins: [
    LinkMixin,
    Navigation,
    State
  ],

  render: function () {
    var $__0=
      
      
      
      
        this.props,to=$__0.to,params=$__0.params,query=$__0.query,active=$__0.active,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{to:1,params:1,query:1,active:1});

    if (this.props.active === undefined) {
      active = this.isActive(to, params, query);
    }

    return (
      React.createElement(Button, React.__spread({},  props, 
        {href: this.getHref(), 
        active: active, 
        onClick: this.handleRouteTo, 
        ref: "button"}), 
          this.props.children
      )
    );
  }
});

module.exports = ButtonLink;
