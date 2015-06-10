import React from 'react';

import NavItem from 'react-bootstrap/lib/NavItem';
import LinkMixin from './LinkMixin';

const NavItemLink = React.createClass({
  mixins: [
    LinkMixin
  ],
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {
    let {
      to,
      params,
      query,
      active,
      ...props
    } = this.props;

    if (this.props.active === undefined) {
      active = this.context.router.isActive(to, params, query);
    }

    return (
      <NavItem {...props}
        href={this.getHref()}
        active={active}
        onClick={this.handleRouteTo}
        ref="navItem">
        {this.props.children}
      </NavItem>
    );
  }
});

export default NavItemLink;
