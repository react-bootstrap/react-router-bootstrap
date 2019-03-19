import React from 'react';
import { withRouter } from 'react-router-dom';

import LinkContainer from './LinkContainer';

// Don't use a stateless function, to allow users to set a ref.
/* eslint-disable react/prefer-stateless-function */
export class IndexLinkContainer extends React.Component {
  render() {
    return (
      <LinkContainer {...this.props} exact />
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

export default withRouter(IndexLinkContainer);
