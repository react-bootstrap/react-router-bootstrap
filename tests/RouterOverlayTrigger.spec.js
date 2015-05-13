/* globals describe, it, expect */

var React = require('react');

var RouterOverlayTrigger = require('../src/RouterOverlayTrigger');

describe('A RouterOverlayTrigger', function() {
  it('has the right contextTypes', function() {
    expect(RouterOverlayTrigger.contextTypes).to.eql({
      router: React.PropTypes.func
    });
  });
});
