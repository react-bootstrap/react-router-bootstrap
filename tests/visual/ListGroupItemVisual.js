import React from 'react';
import {Link} from 'react-router';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroupItemLink from '../../src/ListGroupItemLink';

const NavItemVisual = React.createClass({
  handleSelect(selectedKey) {
    window.alert('selected ' + selectedKey);
  },
  render() {
    return (
      <div>
        <Link to='home'>&lt;-- Back to Index</Link>
        <h2>ListGroupItemLink</h2>
        <h3>Baseline (Raw React-Bootstrap)</h3>
        <ListGroup>
          <ListGroupItem eventKey={1} href="/home" header="ListGroupItem 1 Heading">ListGroupItem 1 content</ListGroupItem>
          <ListGroupItem eventKey={2} header="ListGroupItem 2 Heading">ListGroupItem 2 content</ListGroupItem>
          <ListGroupItem eventKey={3} disabled={true}>ListGroupItem 3 content disabled</ListGroupItem>
          <ListGroupItem eventKey={4} bsStyle="success">ListGroupItem 4 content success</ListGroupItem>
          <ListGroupItem eventKey={5} bsStyle="info">ListGroupItem 5 content info</ListGroupItem>
          <ListGroupItem eventKey={6} bsStyle="warning">ListGroupItem 6 content warning</ListGroupItem>
          <ListGroupItem eventKey={7} bsStyle="danger">ListGroupItem 7 content danger</ListGroupItem>
        </ListGroup>
        <h3>ListGroupItemLink</h3>
        <ListGroup>
          <ListGroupItemLink to="list-group-item" header="ListGroupItemLink 1 Heading">ListGroupItemLink 1 content</ListGroupItemLink>
          <ListGroupItemLink to="home" header="ListGroupItemLink 2 Heading">ListGroupItemLink 2 content</ListGroupItemLink>
          <ListGroupItemLink to="home" disabled={true}>ListGroupItemLink 3 content disabled</ListGroupItemLink>
          <ListGroupItemLink to="home" bsStyle="success">ListGroupItemLink 4 content success</ListGroupItemLink>
          <ListGroupItemLink to="home" bsStyle="info">ListGroupItemLink 5 content info</ListGroupItemLink>
          <ListGroupItemLink to="home" bsStyle="warning">ListGroupItemLink 6 content warning</ListGroupItemLink>
          <ListGroupItemLink to="home" bsStyle="danger">ListGroupItemLink 7 content danger</ListGroupItemLink>
        </ListGroup>
      </div>
    );
  }
});

export default NavItemVisual;
