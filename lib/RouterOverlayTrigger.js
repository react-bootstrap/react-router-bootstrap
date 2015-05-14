var React = require('react');

var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

module.exports = OverlayTrigger.withContext({
  router: React.PropTypes.func
});
