/* globals describe, it, expect */

var React = require('react');

var RouterModalTrigger = require('../src/RouterModalTrigger');

describe('A RouterModalTrigger', function() {
  it('has the right contextTypes', function() {
    expect(RouterModalTrigger.contextTypes).to.eql({
      router: React.PropTypes.func
    });
  });
});
