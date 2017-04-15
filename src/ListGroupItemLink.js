import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

import LinkContainer from './LinkContainer';

const propTypes = {
  children: React.PropTypes.node,
};

// Don't use a stateless function, to allow users to set a ref.
/* eslint-disable react/prefer-stateless-function */
class ListGroupItemLink extends React.Component {
  render() {
    return (
      <LinkContainer {...this.props}>
        <ListGroupItem>
          {this.props.children}
        </ListGroupItem>
      </LinkContainer>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

ListGroupItemLink.propTypes = propTypes;

export default ListGroupItemLink;
