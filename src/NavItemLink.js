import React from 'react';

import NavItem from 'react-bootstrap/lib/NavItem';
import LinkMixin from './LinkMixin';

const NavItemLink = React.createClass({
  mixins: [
    LinkMixin
  ],

  render() {
    return (
      <NavItem {...this.getLinkProps()} ref="navItem">
        {this.props.children}
      </NavItem>
    );
  }
});

export default NavItemLink;
