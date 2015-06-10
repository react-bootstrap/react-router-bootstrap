require('babel/register');
var webpackConfig = require('./webpack.test.config.babel.js');
delete webpackConfig.entry;

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: [ 'mocha' ],

    files: [
      './tests/index.js'
    ],

    exclude: [],

    preprocessors: {
      './tests/index.js': [ 'webpack' ]
    },

    webpack: [ webpackConfig ],

    webpackMiddleware: { },

    reporters: [ 'mocha' ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [ 'PhantomJS' ],

    captureTimeout: 60000,
    browserDisconnectTimeout: 7000,
    browserDisconnectTolerance: 1,
    browserDisconnectNoActivityTimeout: 60000,

    singleRun: false
  });
};
