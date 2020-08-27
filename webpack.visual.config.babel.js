import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './test/visual',

  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.woff|\.woff2$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.eot$|\.ttf$|\.svg$/, loader: 'file?prefix=font/' },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  devtool: 'eval-source-map',
};
