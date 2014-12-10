var React = require('react');

var Button = require('react-bootstrap/Button');

var Navigation = require('react-router/modules/mixins/Navigation');
var State = require('react-router/modules/mixins/State');

var helpers = require('./helpers');

ADDITIONAL_RESERVED_PROPS = ['key', 'ref'];

var ButtonLink = React.createClass({displayName: 'ButtonLink',
  mixins: [State, Navigation],

  additionalReservedProps: ADDITIONAL_RESERVED_PROPS,

  getInitialState: function() {
    return {
      href: '#'
    }
  },

  componentDidMount: function() {
    var params = this.getCleanedParams();
    var href = this.makeHref(this.props.to, params, this.props.query || null);

    this.setState({
      href: href
    });
  },

  getCleanedParams: function() {
    var reserved = Object.keys(this.refs.button.constructor.propTypes)
      .concat(ADDITIONAL_RESERVED_PROPS);

    return helpers.withoutProperties(this.props, reserved || []);
  },

  handleRouteTo: function (e) {
    if (helpers.isModifiedEvent(e) || !helpers.isLeftClick(e)) {
      return;
    }
    e.preventDefault();
    var params = this.getCleanedParams();
    return this.transitionTo(this.props.to, params, this.props.query || null);
  },

  render: function () {
    return (
      React.createElement(Button, React.__spread({}, 
        this.props, 
        {href: this.state.href, 
        onClick: this.handleRouteTo, 
        ref: "button"}), 
          this.props.children
      )
    );
  }
});

module.exports = ButtonLink;
