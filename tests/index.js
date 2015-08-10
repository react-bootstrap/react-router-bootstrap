import './phantom-shims';
import 'mocha';

let chai = require('chai');
chai.should();

global.expect = chai.expect;
global.assert = chai.assert;

global.TestUtils = require('react/addons').addons.TestUtils;

import './ButtonLink.spec.js';
import './ListGroupItemLink.spec.js';
import './MenuItemLink.spec.js';
import './NavItemLink.spec.js';
import './RouterOverlayTrigger.spec.js';
import './ThumbnailLink.spec.js';
import './bower-imports-module.spec.js';
