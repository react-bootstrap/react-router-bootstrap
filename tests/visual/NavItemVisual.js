import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router';

import LinkContainer from '../../src/LinkContainer';

export default () => (
  <div>
    <Link to="/home">Back to Index</Link>
    <h2>NavItem</h2>

    <h3>Baseline</h3>
    <Nav bsStyle="pills" activeKey={1}>
      <NavItem eventKey={1}>NavItem 1 content</NavItem>
      <NavItem eventKey={2}>NavItem 2 content</NavItem>
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
    </Nav>

    <h3>LinkContainer</h3>
    <Nav bsStyle="pills">
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
