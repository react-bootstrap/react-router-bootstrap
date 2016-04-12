import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import { Link } from 'react-router';

import LinkContainer from '../../src/LinkContainer';

export default () => (
  <div>
    <Link to="/home">Back to Index</Link>
    <h2>ListGroupItem</h2>

    <h3>Baseline</h3>
    <ListGroup>
      <ListGroupItem href="#/home" active header="ListGroupItem 1 Heading">
        ListGroupItem 1 content
      </ListGroupItem>
      <ListGroupItem header="ListGroupItem 2 Heading">
        ListGroupItem 2 content
      </ListGroupItem>
      <ListGroupItem disabled>
        ListGroupItem 3 content disabled
      </ListGroupItem>
      <ListGroupItem bsStyle="success">
        ListGroupItem 4 content success
      </ListGroupItem>
      <ListGroupItem bsStyle="info">
        ListGroupItem 5 content info
      </ListGroupItem>
      <ListGroupItem bsStyle="warning">
        ListGroupItem 6 content warning
      </ListGroupItem>
      <ListGroupItem bsStyle="danger">
        ListGroupItem 7 content danger
      </ListGroupItem>
    </ListGroup>

    <h3>LinkContainer</h3>
    <ListGroup>
      <LinkContainer to="/list-group-item">
        <ListGroupItem header="ListGroupItem 1 Heading">
          ListGroupItem 1 content
        </ListGroupItem>
      </LinkContainer>
      <LinkContainer to="/home">
        <ListGroupItem header="ListGroupItem 2 Heading">
          ListGroupItem 2 content
        </ListGroupItem>
      </LinkContainer>
      <LinkContainer to="/home" disabled>
        <ListGroupItem>
          ListGroupItem 3 content disabled
        </ListGroupItem>
      </LinkContainer>
      <LinkContainer to="/home">
        <ListGroupItem bsStyle="success">
          ListGroupItem 4 content success
        </ListGroupItem>
      </LinkContainer>
      <LinkContainer to="/home">
        <ListGroupItem bsStyle="info">
          ListGroupItem 5 content info
        </ListGroupItem>
      </LinkContainer>
      <LinkContainer to="/home">
        <ListGroupItem bsStyle="warning">
          ListGroupItem 6 content warning
        </ListGroupItem>
      </LinkContainer>
      <LinkContainer to="/home">
        <ListGroupItem bsStyle="danger">
          ListGroupItem 7 content danger
        </ListGroupItem>
      </LinkContainer>
    </ListGroup>
  </div>
);
