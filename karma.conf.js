var webpackConfig = require('./webpack.test.config.js');

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

    browsers: [ 'Chrome' ],

    captureTimeout: 60000,

    singleRun: false
  });
};
