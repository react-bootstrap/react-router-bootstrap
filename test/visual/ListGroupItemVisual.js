import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import { Link } from 'react-router';

import ListGroupItemLink from '../../src/ListGroupItemLink';

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

    <h3>ListGroupItemLink</h3>
    <ListGroup>
      <ListGroupItemLink to="/list-group-item" header="ListGroupItem 1 Heading">
          ListGroupItem 1 content
      </ListGroupItemLink>
      <ListGroupItemLink to="/home" header="ListGroupItem 2 Heading">
          ListGroupItem 2 content
      </ListGroupItemLink>
      <ListGroupItemLink to="/home" disabled>
          ListGroupItem 3 content disabled
      </ListGroupItemLink>
      <ListGroupItemLink to="/home" bsStyle="success">
          ListGroupItem 4 content success
      </ListGroupItemLink>
      <ListGroupItemLink to="/home" bsStyle="info">
          ListGroupItem 5 content info
      </ListGroupItemLink>
      <ListGroupItemLink to="/home" bsStyle="warning">
          ListGroupItem 6 content warning
      </ListGroupItemLink>
      <ListGroupItemLink to="/home" bsStyle="danger">
          ListGroupItem 7 content danger
      </ListGroupItemLink>
    </ListGroup>
  </div>
);
