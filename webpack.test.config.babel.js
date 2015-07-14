import path from 'path';

module.exports = {
  entry: {
    visual: ['./tests/visual.js']
  },

  devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, 'tests-served/'),
    publicPath: '/public/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {test: /\.js/, loader: 'babel', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style!css!less'},
      {test:/\.woff|\.woff2$/, loader: 'url?prefix=font/&limit=5000'},
      {test:/\.eot$|\.ttf$|\.svg$/, loader: 'file?prefix=font/'}
    ]
  }
};
