import React from 'react';
import { NavItem } from 'react-bootstrap';

import LinkContainer from './LinkContainer';

const propTypes = {
  children: React.PropTypes.node,
};

// Don't use a stateless function, to allow users to set a ref.
/* eslint-disable react/prefer-stateless-function */
class NavItemLink extends React.Component {
  render() {
    return (
      <LinkContainer {...this.props}>
        <NavItem>
          {this.props.children}
        </NavItem>
      </LinkContainer>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

NavItemLink.propTypes = propTypes;

export default NavItemLink;
