var path = require('path');

module.exports = {
  entry: {
    visual: ['./tests/visual.js']
  },

  devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, "tests-served/"),
    publicPath: "/public/",
    filename: "[name].js"
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, loader: "jsx?harmony"},
      {test: /\.less$/, loader: "style!css!less"},
      {test:/\.woff$/, loader: "url?prefix=font/&limit=5000"},
      {test:/\.eot$|\.ttf$|\.svg$/, loader: "file?prefix=font/"}
    ]
  },
}
