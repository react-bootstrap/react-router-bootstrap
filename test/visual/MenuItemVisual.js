import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import SplitButton from 'react-bootstrap/lib/SplitButton';
import { Link } from 'react-router';

import MenuItemLink from '../../src/MenuItemLink';

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

    <h3>MenuItemLink</h3>
    <ButtonToolbar>
      <SplitButton title="Dropdown">
        <MenuItemLink to="/home">Action</MenuItemLink>
        <MenuItemLink to="/menu-item">Active action</MenuItemLink>
        <MenuItemLink to="/home">Another action</MenuItemLink>
        <MenuItem divider />
        <MenuItemLink to="/home">Separated link</MenuItemLink>
      </SplitButton>
    </ButtonToolbar>
  </div>
);
