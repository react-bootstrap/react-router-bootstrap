const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './test/visual',

  module: {
    rules: [
      { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.woff|\.woff2$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.eot$|\.ttf$|\.svg$/, loader: 'file?prefix=font/' },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],

  devtool: 'eval-source-map',
};
