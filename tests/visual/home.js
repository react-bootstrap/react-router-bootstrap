import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
  render() {
    return (
      <div>
        <h2>Index</h2>
        <ul>
          <li><Link to='button'>ButtonLink</Link></li>
          <li><Link to='nav-item'>NavItemLink</Link></li>
          <li><Link to='menu-item'>MenuItemLink</Link></li>
          <li><Link to='list-group-item'>ListGroupItemLink</Link></li>
          <li><Link to='page-item'>PageItemLink</Link></li>
          <li><Link to='thumbnail'>ThumbnailLink</Link></li>
        </ul>
      </div>
    );
  }
});

export default Home;
