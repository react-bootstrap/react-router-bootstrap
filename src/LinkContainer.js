// This is largely taken from react-router/lib/Link.

import React from 'react';
import {Link} from 'react-router';

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

    Link.prototype.handleClick.call(this, event);
  }

  render() {
    const {history} = this.context;
    const {onlyActiveOnIndex, to, query, children, ...props} = this.props;

    delete props.state;
    delete props.onClick;
    props.onClick = this.onClick;
    props.href = history.createHref(to, query);
    props.active = history.isActive(to, query, onlyActiveOnIndex);

    return React.cloneElement(React.Children.only(children), props);
  }
}

LinkContainer.propTypes = {
  onlyActiveOnIndex: React.PropTypes.bool.isRequired,
  to: React.PropTypes.string.isRequired,
  query: React.PropTypes.object,
  state: React.PropTypes.object,
  onClick: React.PropTypes.func,
  disabled: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired
};

LinkContainer.contextTypes = {
  history: React.PropTypes.object.isRequired
};

LinkContainer.defaultProps = {
  onlyActiveOnIndex: false,
  disabled: false
};
