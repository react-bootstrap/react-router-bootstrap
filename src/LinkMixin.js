import React from 'react';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

export default {
  propTypes: {
    active: React.PropTypes.bool,
    activeClassName: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool,
    to: React.PropTypes.string.isRequired,
    params: React.PropTypes.object,
    query: React.PropTypes.object,
    onClick: React.PropTypes.func
  },
  contextTypes: {
    history: React.PropTypes.object.isRequired
  },

  getDefaultProps() {
    return {
      activeClassName: 'active'
    };
  },

  /**
   * Returns props except those used by this Mixin
   * Gets "active" from router if needed.
   * Gets the value of the "href" attribute to use on the DOM element.
   * Sets "onClick" to "handleRouteTo".
   */
  getLinkProps() {
    const {
      to,
      params,
      query,
      ...props
    } = this.props;

    if (this.props.active === undefined) {
      props.active = this.context.history.isActive(to, params, query);
    }

    props.href = this.context.history.createHref(to, query);

    props.onClick = this.handleRouteTo;

    return props;
  },

  handleRouteTo(event) {
    let allowTransition = true;
    let clickResult;

    if (this.props.disabled) {
      event.preventDefault();
      return;
    }

    if (this.props.onClick) {
      clickResult = this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (clickResult === false || event.defaultPrevented === true) {
      allowTransition = false;
    }

    event.preventDefault();

    const location = {
        pathname: this.props.to,
        search: '',
        query: this.props.query,
        state: null,
        action: 'REPLACE',
        key: null
    };

    if (allowTransition) {
      this.context.history.transitionTo(location);
    }
  }
};
