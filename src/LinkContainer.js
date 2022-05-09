import React from 'react';
import PropTypes from 'prop-types';
import {
  useHref,
  useLocation,
  useMatch,
  useNavigate,
} from 'react-router-dom';

const isModifiedEvent = (event) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const LinkContainer = ({
                         children,
                         onClick,
                         replace, // eslint-disable-line no-unused-vars
                         to,
                         className,
                         style,
                         isActive: getIsActive,
                         // eslint-disable-next-line comma-dangle
                         ...props
                       }) => {
  const path = typeof to === 'object' ? to.pathname : to;
  const navigate = useNavigate();
  const href = useHref(typeof to === 'string' ? {pathname: to} : to);
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
      });
    }
  };

  return React.cloneElement(child, {
    ...props,
    className: [
      typeof className === 'function' ? className({isActive}) : className,
      child.props.className,
    ]
      .join(' ')
      .trim(),
    style: typeof style === 'function' ? style({isActive}) : style,
    href,
    onClick: handleClick,
  });
};

LinkContainer.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  replace: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.oneOfType([PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ), PropTypes.func]),
  isActive: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

LinkContainer.defaultProps = {
  replace: false,
  onClick: null,
  className: ({isActive}) => isActive ? 'active' : null,
  style: null,
  isActive: null,
};

export default LinkContainer;
