import React from 'react';

import LinkContainer from './LinkContainer';

export default class IndexLinkContainer extends React.Component {
  render() {
    return (
      <LinkContainer {...this.props} onlyActiveOnIndex />
    );
  }
}
