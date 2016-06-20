import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { Link } from 'react-router';

import LinkContainer from '../../src/LinkContainer';

export default () => (
  <div>
    <Link to="/home">Back to Index</Link>
    <h2>NavDropdown</h2>

    <h3>Baseline</h3>
    <Navbar>
      <Nav>
        <NavDropdown eventKey="1" title="Dropdown">
          <MenuItem href="#" eventKey="1.1">Action</MenuItem>
          <MenuItem href="#" eventKey="1.2">Another action</MenuItem>
        </NavDropdown>
        <NavItem href="#" eventKey="2">Another</NavItem>
        <NavItem href="#" eventKey="3">And More</NavItem>
      </Nav>
    </Navbar>

    <h3>LinkContainer</h3>
    <Navbar>
      <Nav>
        <NavDropdown eventKey="1" title="Dropdown">
          <LinkContainer to="#">
            <MenuItem eventKey="1.1">Action</MenuItem>
          </LinkContainer> 
          <LinkContainer to="#">
            <MenuItem eventKey="1.2">Another action</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="#">
          <NavItem eventKey="2">Another</NavItem>
        </LinkContainer>
        <LinkContainer to="#">
          <NavItem eventKey="3">And More</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
</div>
);
