// This is largely taken from react-router/lib/Link.
import PropTypes from 'prop-types';
import React from 'react';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function createLocationDescriptor(to, query, hash, state) {
  if (query || hash || state) {
    return { pathname: to, query, hash, state };
  }

  return to;
}

function resolveToLocation(to, router) {
  return typeof to === 'function' ? to(router.location) : to;
}

const propTypes = {
  onlyActiveOnIndex: PropTypes.bool.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  query: PropTypes.string,
  hash: PropTypes.string,
  state: PropTypes.object,
  action: PropTypes.oneOf([
    'push',
    'replace',
  ]).isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  onlyActiveOnIndex: false,
  action: 'push',
};

class LinkContainer extends React.Component {
  onClick = (event) => {
    const {
      to, query, hash, state, children, onClick, target, action,
    } = this.props;

    const { router } = this.context;

    const toLocation = resolveToLocation(to, router);

    if (children.props.onClick) {
      children.props.onClick(event);
    }

    if (onClick) {
      onClick(event);
    }

    if (
      target ||
      event.defaultPrevented ||
      isModifiedEvent(event) ||
      !isLeftClickEvent(event)
    ) {
      return;
    }

    event.preventDefault();

    router[action](
      createLocationDescriptor(toLocation, query, hash, state)
    );
  };

  render() {
    const { router } = this.context;
    const { onlyActiveOnIndex, to, children, ...props } = this.props;
    const toLocation = resolveToLocation(to, router);

    props.onClick = this.onClick;

    // Ignore if rendered outside Router context; simplifies unit testing.
    if (router) {
      props.href = router.createHref(toLocation);

      if (props.active == null) {
        props.active = router.isActive(toLocation, onlyActiveOnIndex);
      }
    }

    return React.cloneElement(React.Children.only(children), props);
  }
}

LinkContainer.propTypes = propTypes;
LinkContainer.contextTypes = contextTypes;
LinkContainer.defaultProps = defaultProps;

export default LinkContainer;
