import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';

import LinkContainer from '../../src/LinkContainer';

export default () => (
  <div>
    <Link to="/home">Back to Index</Link>
    <h2>NavItem</h2>

    <h3>Baseline</h3>
    <Nav variant="pills" activeKey={1}>
      <NavItem>NavItem 1 content</NavItem>
      <NavItem>NavItem 2 content</NavItem>
      <NavItem disabled>NavItem 3 content</NavItem>
    </Nav>

    <h3>LinkContainer</h3>
    <Nav variant="pills">
      <LinkContainer to="/nav-item">
        <NavItem>NavItem 1 content</NavItem>
      </LinkContainer>
      <LinkContainer to="/home">
        <NavItem>NavItem 2 content</NavItem>
      </LinkContainer>
      <LinkContainer to="/home" disabled>
        <NavItem>NavItem 3 content</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);
