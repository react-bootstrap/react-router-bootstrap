import React from 'react';
import { Button } from 'react-bootstrap';

import LinkContainer from './LinkContainer';

const propTypes = {
  children: React.PropTypes.node,
};

// Don't use a stateless function, to allow users to set a ref.
/* eslint-disable react/prefer-stateless-function */
class ButtonLink extends React.Component {
  render() {
    return (
      <LinkContainer {...this.props}>
        <Button>
          {this.props.children}
        </Button>
      </LinkContainer>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

ButtonLink.propTypes = propTypes;

export default ButtonLink;
