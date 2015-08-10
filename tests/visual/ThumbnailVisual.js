import React from 'react';
import {Link} from 'react-router';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import ThumbnailLink from '../../src/ThumbnailLink';

const ThumbnailVisual = React.createClass({
  render() {
    return (
      <div>
        <Link to='home'>&lt;-- Back to Index</Link>
        <h2>Thumbnailink</h2>
        <h3>Baseline (Raw React-Bootstrap)</h3>
        <Thumbnail alt='171x180' src='/assets/thumbnail.png' />
        <h3>ThumbnailLink</h3>
        <ThumbnailLink to='home' alt='171x180' src='/assets/thumbnail.png' />
      </div>
    );
  }
});

export default ThumbnailVisual;
