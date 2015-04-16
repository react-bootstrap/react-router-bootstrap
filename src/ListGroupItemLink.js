var React = require('react');

var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');
var LinkMixin = require('./LinkMixin');

var LinkGroupItemLink = React.createClass({
  mixins: [
    LinkMixin
  ],
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {
    var {
      to,
      params,
      query,
      active,
      ...props} = this.props;

    if (this.props.active === undefined) {
      active = this.context.router.isActive(to, params, query);
    }

    return (
      <ListGroupItem {...props}
        href={this.getHref()}
        active={active}
        onClick={this.handleRouteTo}
        ref="listGroupItem">
        {this.props.children}
      </ListGroupItem>
    );
  }
});

module.exports = LinkGroupItemLink;
