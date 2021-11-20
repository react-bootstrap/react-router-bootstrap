const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const optimizationMinimize = argv.optimizationMinimize;

  return {
    mode,
    entry: {
      ReactRouterBootstrap: './src/index.js',
    },

    output: {
      path: path.join(__dirname, 'lib'),
      filename: optimizationMinimize ? '[name].min.js' : '[name].js',
      library: 'ReactRouterBootstrap',
      libraryTarget: 'umd',
    },

    module: {
      rules: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      ],
    },

    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
      },
      {
        'react-router-dom': {
          root: 'ReactRouterDOM',
          commonjs2: 'react-router-dom',
          commonjs: 'react-router-dom',
          amd: 'react-router-dom',
        },
      },
    ],

    devtool: optimizationMinimize ? 'source-map' : false,
  };
};
