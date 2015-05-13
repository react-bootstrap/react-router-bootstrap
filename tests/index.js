require('./phantom-shims');
var mocha = require('mocha');

var chai = require('chai');
chai.should();

global.expect = chai.expect;
global.assert = chai.assert;

global.TestUtils = require('react/addons').addons.TestUtils;

require('./ButtonLink.spec.js');
require('./ListGroupItemLink.spec.js');
require('./MenuItemLink.spec.js');
require('./NavItemLink.spec.js');
require('./RouterModalTrigger.spec.js');
require('./RouterOverlayTrigger.spec.js');
