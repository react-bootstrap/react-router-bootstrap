import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div>
    <h2>Index</h2>
    <ul>
      <li><Link to="/button">Button</Link></li>
      <li><Link to="/nav-item">NavItem</Link></li>
      <li><Link to="/menu-item">MenuItem</Link></li>
      <li><Link to="/list-group-item">ListGroupItem</Link></li>
    </ul>
  </div>
);
