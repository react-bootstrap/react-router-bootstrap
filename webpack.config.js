var webpack = require('webpack');

var plugins = [];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

module.exports = {

  output: {
    library: 'ReactRouterBootstrap',
    libraryTarget: 'umd'
  },

  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    },
    {
      "react-router": {
        root: "ReactRouter",
        commonjs2: "react-router",
        commonjs: "react-router",
        amd: "react-router"
      }
    },
    {
      "react-bootstrap": {
        root: "ReactBootstrap",
        commonjs2: "react-bootstrap",
        commonjs: "react-bootstrap",
        amd: "react-bootstrap"
      }
    },
    {
      "react-bootstrap/lib/Button": {
        root: ["ReactBootstrap", "Button"],
        commonjs2: "react-bootstrap/lib/Button",
        commonjs: "react-bootstrap/lib/Button",
        amd: "react-bootstrap/Button"
      }
    },
    {
      "react-bootstrap/lib/NavItem": {
        root: ["ReactBootstrap", "NavItem"],
        commonjs2: "react-bootstrap/lib/NavItem",
        commonjs: "react-bootstrap/lib/NavItem",
        amd: "react-bootstrap/NavItem"
      }
    },
    {
      "react-bootstrap/lib/MenuItem": {
        root: ["ReactBootstrap", "MenuItem"],
        commonjs2: "react-bootstrap/lib/MenuItem",
        commonjs: "react-bootstrap/lib/MenuItem",
        amd: "react-bootstrap/MenuItem"
      }
    },
    {
      "react-bootstrap/lib/ListGroupItem": {
        root: ["ReactBootstrap", "ListGroupItem"],
        commonjs2: "react-bootstrap/lib/ListGroupItem",
        commonjs: "react-bootstrap/lib/ListGroupItem",
        amd: "react-bootstrap/ListGroupItem"
      }
    }
  ],

  node: {
    buffer: false
  },

  plugins: plugins
};
