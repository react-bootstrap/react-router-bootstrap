var mocha = require('mocha');

var chai = require('chai');
chai.should();

global.expect = chai.expect;
global.assert = chai.assert;

global.TestUtils = require('react/addons').addons.TestUtils;

require('./ButtonLink.spec');
require('./NavItemLink.spec');
