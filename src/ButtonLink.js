var React = require('react');

var Button = require('react-bootstrap/lib/Button');
var LinkMixin = require('./LinkMixin');

var ButtonLink = React.createClass({
  mixins: [
    LinkMixin
  ],
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function () {
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
      <Button {...props}
        href={this.getHref()}
        active={active}
        onClick={this.handleRouteTo}
        ref="button">
          {this.props.children}
      </Button>
    );
  }
});

module.exports = ButtonLink;
