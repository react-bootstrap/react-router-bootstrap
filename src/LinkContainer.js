import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';

const isModifiedEvent = (event) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

export class LinkContainer extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
      createHref: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.object,
    match: PropTypes.object,
    staticContext: PropTypes.object,
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
    replace: PropTypes.bool,
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    exact: PropTypes.bool,
    strict: PropTypes.bool,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    style: PropTypes.object,
    activeStyle: PropTypes.object,
    isActive: PropTypes.func,
  };

  static defaultProps = {
    replace: false,
    exact: false,
    strict: false,
    activeClassName: 'active',
  };

  handleClick = (event) => {
    const { children, onClick } = this.props;

    if (children.props.onClick) {
      children.props.onClick(event);
    }

    if (onClick) {
      onClick(event);
    }

    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault();

      const { replace, to, history } = this.props;

      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }
  };

  render() {
    const {
      history,
      location: _location,            // eslint-disable-line no-unused-vars
      match: _match,                  // eslint-disable-line no-unused-vars
      staticContext: _staticContext,  // eslint-disable-line no-unused-vars
      children,
      replace,                          // eslint-disable-line no-unused-vars
      to,
      exact,
      strict,
      activeClassName,
      className,
      activeStyle,
      style,
      isActive: getIsActive,
      ...props,
    } = this.props;

    const href = history.createHref(
      typeof to === 'string' ? { pathname: to } : to
    );

    const child = React.Children.only(children);

    return (
      <Route
        path={typeof to === 'object' ? to.pathname : to}
        exact={exact}
        strict={strict}
        children={({ location, match }) => {
          const isActive = !!(getIsActive ? getIsActive(match, location) : match);

          return React.cloneElement(
            child,
            {
              ...props,
              className: [className, child.props.className, isActive ? activeClassName : null]
                .join(' ').trim(),
              style: isActive ? { ...style, ...activeStyle } : style,
              href,
              onClick: this.handleClick,
            }
          );
        }}
      />
    );
  }
}

export default withRouter(LinkContainer);
