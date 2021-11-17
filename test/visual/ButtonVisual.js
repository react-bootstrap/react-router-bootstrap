import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import LinkContainer from '../../src/LinkContainer';

export default () => (
  <div>
    <Link to="/home">Back to Index</Link>
    <h2>Button</h2>

    <h3>Baseline</h3>
    <ButtonToolbar>
      <Button>Default</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
    </ButtonToolbar>

    <h3>LinkContainer</h3>
    <ButtonToolbar>
      <LinkContainer to="/home">
        <Button>Default</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button variant="success">Success</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button variant="info">Info</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button variant="warning">Warning</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button variant="danger">Danger</Button>
      </LinkContainer>
      <LinkContainer to="/home">
        <Button variant="link">Link</Button>
      </LinkContainer>
    </ButtonToolbar>
  </div>
);
