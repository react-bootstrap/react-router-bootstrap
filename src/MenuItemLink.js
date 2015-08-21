import React from 'react';

import MenuItem from 'react-bootstrap/lib/MenuItem';
import LinkMixin from './LinkMixin';

const MenuItemLink = React.createClass({
  mixins: [
    LinkMixin
  ],

  render() {
    const props = this.getLinkProps();
    delete props.onSelect; // this is done on the copy of this.props

    return (
      <MenuItem {...props} ref="menuItem">
        {this.props.children}
      </MenuItem>
    );
  }
});

export default MenuItemLink;
