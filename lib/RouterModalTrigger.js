var React = require('react');

var ModalTrigger = require('react-bootstrap/lib/ModalTrigger');

module.exports = ModalTrigger.withContext({
  router: React.PropTypes.func
});
