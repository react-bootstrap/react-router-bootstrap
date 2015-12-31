import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './tests/visual',
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.woff|\.woff2$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.eot$|\.ttf$|\.svg$/, loader: 'file?prefix=font/' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devtool: 'eval-source-map'
};
