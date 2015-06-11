import React from 'react';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import LinkMixin from './LinkMixin';

const LinkGroupItemLink = React.createClass({
  mixins: [
    LinkMixin
  ],

  render() {
    return (
      <ListGroupItem {...this.getLinkProps()} ref='listGroupItem'>
        {this.props.children}
      </ListGroupItem>
    );
  }
});

export default LinkGroupItemLink;
