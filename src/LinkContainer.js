import React from 'react';
import PropTypes from 'prop-types';
import { useHref, useLocation, useMatch, useNavigate } from 'react-router-dom';

const isModifiedEvent = (event) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const LinkContainer = ({
  children,
  onClick,
  replace = false, // eslint-disable-line no-unused-vars
  to,
  state,
  activeClassName = 'active',
  className,
  activeStyle,
  style,
  isActive: getIsActive,
  // eslint-disable-next-line comma-dangle
  ...props
}) => {
  const path = typeof to === 'object' ? to.pathname || '' : to;
  const navigate = useNavigate();
  const href = useHref(typeof to === 'string' ? { pathname: to } : to);
  const match = useMatch(path);
  const location = useLocation();
  const child = React.Children.only(children);

  const isActive = !!(getIsActive
    ? typeof getIsActive === 'function'
      ? getIsActive(match, location)
      : getIsActive
    : match);

  const handleClick = (event) => {
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

      navigate(to, {
        replace,
        state,
      });
    }
  };

  return React.cloneElement(child, {
    ...props,
    className: [
      className,
      child.props.className,
      isActive ? activeClassName : null,
    ]
      .join(' ')
      .trim(),
    style: isActive ? { ...style, ...activeStyle } : style,
    href,
    onClick: handleClick,
  });
};

LinkContainer.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  replace: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  state: PropTypes.object,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  activeStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  isActive: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default LinkContainer;
