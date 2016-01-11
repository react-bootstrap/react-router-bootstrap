// This is largely taken from react-router/lib/Link.

import React from 'react';
import { Link } from 'react-router';

export default class LinkContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    if (this.props.disabled) {
      event.preventDefault();
      return;
    }

    if (this.props.children.props.onClick) {
      this.props.children.props.onClick(event);
    }

    Link.prototype.handleClick.call(this, event);
  }

  render() {
    const { router } = this.context;
    const { onlyActiveOnIndex, to, children, ...props } = this.props;

    props.onClick = this.onClick;

    // Ignore if rendered outside Router context; simplifies unit testing.
    if (router) {
      props.href = router.createHref(to);

      if (props.active == null) {
        props.active = router.isActive(to, onlyActiveOnIndex);
      }
    }

    return React.cloneElement(React.Children.only(children), props);
  }
}

LinkContainer.propTypes = {
  onlyActiveOnIndex: React.PropTypes.bool.isRequired,
  to: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
  onClick: React.PropTypes.func,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired
};

LinkContainer.contextTypes = {
  router: React.PropTypes.object
};

LinkContainer.defaultProps = {
  onlyActiveOnIndex: false,
  disabled: false
};
