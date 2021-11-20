const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './test/visual',
  mode: 'development',
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.woff|\.woff2$/, use: 'url?prefix=font/&limit=5000' },
      { test: /\.eot$|\.ttf$|\.svg$/, use: 'file?prefix=font/' },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],

  devtool: 'eval-source-map',
};
