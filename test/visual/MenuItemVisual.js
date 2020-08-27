import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownItem from 'react-bootstrap/DropdownItem';
import SplitButton from 'react-bootstrap/SplitButton';
import { Link } from 'react-router-dom';

import LinkContainer from '../../src/LinkContainer';

export default () => (
  <div>
    <Link to="/home">Back to Index</Link>
    <h2>MenuItem</h2>

    <h3>Baseline</h3>
    <ButtonToolbar>
      <SplitButton title="Dropdown">
        <DropdownItem>Action</DropdownItem>
        <DropdownItem active>Active action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Separated link</DropdownItem>
      </SplitButton>
    </ButtonToolbar>

    <h3>LinkContainer</h3>
    <ButtonToolbar>
      <SplitButton title="Dropdown">
        <LinkContainer to="/home">
          <DropdownItem>Action</DropdownItem>
        </LinkContainer>
        <LinkContainer to="/menu-item">
          <DropdownItem>Active action</DropdownItem>
        </LinkContainer>
        <LinkContainer to="/home">
          <DropdownItem>Another action</DropdownItem>
        </LinkContainer>
        <DropdownItem divider />
        <LinkContainer to="/home">
          <DropdownItem>Separated link</DropdownItem>
        </LinkContainer>
      </SplitButton>
    </ButtonToolbar>
  </div>
);
