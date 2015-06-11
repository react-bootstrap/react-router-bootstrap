import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import LinkMixin from './LinkMixin';

const ButtonLink = React.createClass({
  mixins: [
    LinkMixin
  ],

  render() {
    return (
      <Button {...this.getLinkProps()} ref='button'>
        {this.props.children}
      </Button>
    );
  }
});

export default ButtonLink;
