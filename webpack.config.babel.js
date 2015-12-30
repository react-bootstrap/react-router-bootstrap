import webpack from 'webpack';
import yargs from 'yargs';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

export default {
  entry: {
    'ReactRouterBootstrap': './src/index.js'
  },
  output: {
    path: './lib',
    filename: optimizeMinimize ? '[name].min.js' : '[name].js',
    library: 'ReactRouterBootstrap',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
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
    }
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(nodeEnv) }
    })
  ],
  devtool: optimizeMinimize ? 'source-map' : null
};
