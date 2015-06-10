import React from 'react';

import MenuItem from 'react-bootstrap/lib/MenuItem';
import LinkMixin from './LinkMixin';

const MenuItemLink = React.createClass({
  mixins: [
    LinkMixin
  ],
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render() {
    let {
      to,
      params,
      query,
      active,
      onSelect, // eslint-disable-line no-unused-vars
      ...props
    } = this.props;

    if (active === undefined) {
      active = this.context.router.isActive(to, params, query);
    }

    return (
      <MenuItem
        {...props}
        href={this.getHref()}
        active={active}
        onClick={this.handleRouteTo}
        ref="menuItem"
      >
        {this.props.children}
      </MenuItem>
    );
  }
});

export default MenuItemLink;
