import loader from '../webpack/bower-imports-loader';

describe('bower-imports-loader', function() {
  it('replaces react-bootstrap/lib/* imports to work with bower dependency', function() {
    const input = `import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import LinkMixin from './LinkMixin';

const ButtonLink = React.createClass({`;

    const expected = `import React from 'react';

import {Button} from 'react-bootstrap';
import LinkMixin from './LinkMixin';

const ButtonLink = React.createClass({`;

    loader(input).should.equal(expected);
  });
});
