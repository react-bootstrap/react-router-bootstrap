import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router-dom';

import NavItemLink from '../../src/NavItemLink';

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

    <h3>NavItemLink</h3>
    <Nav bsStyle="pills">
      <NavItemLink to="/nav-item">NavItem 1 content</NavItemLink>
      <NavItemLink to="/home">NavItem 2 content</NavItemLink>
      <NavItemLink to="/home" disabled>NavItem 3 content</NavItemLink>
    </Nav>
  </div>
);
