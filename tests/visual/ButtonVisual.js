import React from 'react';
import {Link} from 'react-router';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import ButtonLink from '../../src/ButtonLink';

const ButtonVisual = React.createClass({
  render() {
    return (
      <div>
        <Link to='home'>&lt;-- Back to Index</Link>
        <h2>ButtonLink</h2>
        <h3>Baseline (Raw React-Bootstrap)</h3>
        <ButtonToolbar>
          <Button>Default</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>
        <h3>ButtonLink</h3>
        <ButtonToolbar>
          <ButtonLink to='home'>Default</ButtonLink>
          <ButtonLink to='home' bsStyle="success">Success</ButtonLink>
          <ButtonLink to='home' bsStyle="info">Info</ButtonLink>
          <ButtonLink to='home' bsStyle="warning">Warning</ButtonLink>
          <ButtonLink to='home' bsStyle="danger">Danger</ButtonLink>
          <ButtonLink to='home' bsStyle="link">Link</ButtonLink>
        </ButtonToolbar>
      </div>
    );
  }
});

export default ButtonVisual;
