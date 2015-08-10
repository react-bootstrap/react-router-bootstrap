import React from 'react';
import {Link} from 'react-router';
import Pager from 'react-bootstrap/lib/Pager';
import PageItem from 'react-bootstrap/lib/PageItem';
import PageItemLink from '../../src/PageItemLink';

const PageItemVisual = React.createClass({
  render() {
    return (
      <div>
        <Link to='home'>&lt;-- Back to Index</Link>
        <h2>PageItemLink</h2>
        <h3>Baseline (Raw React-Bootstrap)</h3>
        <Pager>
          <PageItem previous>&larr; Previous Page</PageItem>
          <PageItem next>Next Page &rarr;</PageItem>
        </Pager>
        <h3>PageItemLink</h3>
        <Pager>
          <PageItemLink previous to='home'>&larr; Previous Page</PageItemLink>
          <PageItemLink next to='home'>Next Page &rarr;</PageItemLink>
        </Pager>
      </div>
    );
  }
});

export default PageItemVisual;
