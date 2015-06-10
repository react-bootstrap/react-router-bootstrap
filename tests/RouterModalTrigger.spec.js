/* globals describe, it, expect */

import React from 'react';

import RouterModalTrigger from '../src/RouterModalTrigger';

describe('A RouterModalTrigger', function() {
  it('has the right contextTypes', function() {
    expect(RouterModalTrigger.contextTypes).to.eql({
      router: React.PropTypes.func
    });
  });
});
