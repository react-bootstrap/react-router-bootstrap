import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

import LinkContainer from '../../src/LinkContainer';

export default () => (
  <div>
    <Link to="home">Back to Index</Link>
    <h2>Button</h2>

    <h3>Baseline</h3>
    <ButtonToolbar>
      <Button>Default</Button>
      <Button bsStyle="success">Success</Button>
      <Button bsStyle="info">Info</Button>
      <Button bsStyle="warning">Warning</Button>
      <Button bsStyle="danger">Danger</Button>
      <Button bsStyle="link">Link</Button>
    </ButtonToolbar>

    <h3>LinkContainer</h3>
    <ButtonToolbar>
      <LinkContainer to="/home">
        <Button>Default</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button bsStyle="success">Success</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button bsStyle="info">Info</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button bsStyle="warning">Warning</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button bsStyle="danger">Danger</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button bsStyle="link">Link</Button>
      </LinkContainer>
    </ButtonToolbar>
  </div>
);
