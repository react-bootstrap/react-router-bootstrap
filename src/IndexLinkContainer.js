import React from 'react';

import LinkContainer from './LinkContainer';

// Don't use a stateless function, to allow users to set a ref.
/* eslint-disable react/prefer-stateless-function */
export default class IndexLinkContainer extends React.Component {
  render() {
    return (
      <LinkContainer {...this.props} exact={true} /> // eslint-disable-line react/jsx-boolean-value
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
