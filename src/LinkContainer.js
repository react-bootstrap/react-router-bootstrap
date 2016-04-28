// This is largely taken from react-router/lib/Link.

import React from 'react';
import Link from 'react-router/lib/Link';

const propTypes = {
  onlyActiveOnIndex: React.PropTypes.bool.isRequired,
  to: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
  onClick: React.PropTypes.func,
  active: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
};

const contextTypes = {
  router: React.PropTypes.object,
};

const defaultProps = {
  onlyActiveOnIndex: false,
};

class LinkContainer extends React.Component {
  onClick = (event) => {
    if (this.props.children.props.onClick) {
      this.props.children.props.onClick(event);
    }

    Link.prototype.handleClick.call(this, event);
  };

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

LinkContainer.propTypes = propTypes;
LinkContainer.contextTypes = contextTypes;
LinkContainer.defaultProps = defaultProps;

export default LinkContainer;
