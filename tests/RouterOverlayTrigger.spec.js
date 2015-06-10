/* globals describe, it, expect */

import React from 'react';

import RouterOverlayTrigger from '../src/RouterOverlayTrigger';

describe('A RouterOverlayTrigger', function() {
  it('has the right contextTypes', function() {
    expect(RouterOverlayTrigger.contextTypes).to.eql({
      router: React.PropTypes.func
    });
  });
});
