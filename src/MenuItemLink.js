import React from 'react';
import { MenuItem } from 'react-bootstrap';

import LinkContainer from './LinkContainer';

const propTypes = {
  children: React.PropTypes.node,
};

// Don't use a stateless function, to allow users to set a ref.
/* eslint-disable react/prefer-stateless-function */
class MenuItemLink extends React.Component {
  render() {
    return (
      <LinkContainer {...this.props}>
        <MenuItem>
          {this.props.children}
        </MenuItem>
      </LinkContainer>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

MenuItemLink.propTypes = propTypes;

export default MenuItemLink;
