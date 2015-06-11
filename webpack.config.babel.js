import path from 'path';
import webpack from 'webpack';

let plugins = [];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

export default {
  entry: {
    'ReactRouterBootstrap': './src/index.js'
  },

  output: {
    path: './lib',
    filename: process.env.COMPRESS ? '[name].min.js' : '[name].js',
    library: 'ReactRouterBootstrap',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: [
          'babel',
          path.join(__dirname, 'webpack/bower-imports-loader.js')
        ],
        exclude: /node_modules/ }
    ]
  },

  devtool: process.env.COMPRESS && 'source-map',

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-router': {
        root: 'ReactRouter',
        commonjs2: 'react-router',
        commonjs: 'react-router',
        amd: 'react-router'
      }
    },
    {
      'react-bootstrap': {
        root: 'ReactBootstrap',
        commonjs2: 'react-bootstrap',
        commonjs: 'react-bootstrap',
        amd: 'react-bootstrap'
      }
    }
  ],

  node: {
    buffer: false
  },

  plugins
};
