import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import SplitButton from 'react-bootstrap/lib/SplitButton';
import { Link } from 'react-router';

import LinkContainer from '../../src/LinkContainer';

export default () => (
  <div>
    <Link to="/home">Back to Index</Link>
    <h2>MenuItem</h2>

    <h3>Baseline</h3>
    <ButtonToolbar>
      <SplitButton title="Dropdown">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2" active>Active action</MenuItem>
        <MenuItem eventKey="3">Another action</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </SplitButton>
    </ButtonToolbar>

    <h3>LinkContainer</h3>
    <ButtonToolbar>
      <SplitButton title="Dropdown">
        <LinkContainer to="/home">
          <MenuItem>Action</MenuItem>
        </LinkContainer>
        <LinkContainer to="/menu-item">
          <MenuItem>Active action</MenuItem>
        </LinkContainer>
        <LinkContainer to="/home">
          <MenuItem>Another action</MenuItem>
        </LinkContainer>
        <MenuItem divider />
        <LinkContainer to="/home">
          <MenuItem>Separated link</MenuItem>
        </LinkContainer>
      </SplitButton>
    </ButtonToolbar>
  </div>
);
