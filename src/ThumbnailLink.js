import React from 'react';

import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import LinkMixin from './LinkMixin';

const ThumbnailLink = React.createClass({
  mixins: [
    LinkMixin
  ],

  render() {
    return (
      <Thumbnail {...this.getLinkProps()} ref='thumbnail'>
        {this.props.children}
      </Thumbnail>
    );
  }
});

export default ThumbnailLink;
