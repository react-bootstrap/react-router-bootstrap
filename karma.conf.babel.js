export default config => {
  config.set({
    basePath: '',

    frameworks: [
      'mocha',
      'sinon-chai',
    ],

    files: [
      './test/index.js',
    ],

    preprocessors: {
      './test/index.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      output: {
        pathinfo: true,
      },
      module: {
        loaders: [
          { test: /\.js/, loader: 'babel', exclude: /node_modules/ },
        ],
      },
      devtool: 'inline-source-map',
    },

    webpackMiddleware: {
      noInfo: true,
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    captureTimeout: 60000,
    browserDisconnectTimeout: 7000,
    browserDisconnectTolerance: 1,
    browserDisconnectNoActivityTimeout: 60000,

    singleRun: false,
  });
};
