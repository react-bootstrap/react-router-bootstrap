import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router-dom';

import ButtonLink from '../../src/ButtonLink';

export default () => (
  <div>
    <Link to="/home">Back to Index</Link>
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

    <h3>ButtonLink</h3>
    <ButtonToolbar>
      <ButtonLink to="/home">Default</ButtonLink>
      <ButtonLink to="/home" bsStyle="success">Success</ButtonLink>
      <ButtonLink to="/home" bsStyle="info">Info</ButtonLink>
      <ButtonLink to="/home" bsStyle="warning">Warning</ButtonLink>
      <ButtonLink to="/home" bsStyle="danger">Danger</ButtonLink>
      <ButtonLink to="/home" bsStyle="link">Link</ButtonLink>
    </ButtonToolbar>
  </div>
);
