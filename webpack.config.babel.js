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

module.exports = {
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
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
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
    },
    {
      'react-bootstrap/lib/Button': {
        root: ['ReactBootstrap', 'Button'],
        commonjs2: 'react-bootstrap/lib/Button',
        commonjs: 'react-bootstrap/lib/Button',
        amd: 'react-bootstrap/lib/Button'
      }
    },
    {
      'react-bootstrap/lib/NavItem': {
        root: ['ReactBootstrap', 'NavItem'],
        commonjs2: 'react-bootstrap/lib/NavItem',
        commonjs: 'react-bootstrap/lib/NavItem',
        amd: 'react-bootstrap/lib/NavItem'
      }
    },
    {
      'react-bootstrap/lib/MenuItem': {
        root: ['ReactBootstrap', 'MenuItem'],
        commonjs2: 'react-bootstrap/lib/MenuItem',
        commonjs: 'react-bootstrap/lib/MenuItem',
        amd: 'react-bootstrap/lib/MenuItem'
      }
    },
    {
      'react-bootstrap/lib/ListGroupItem': {
        root: ['ReactBootstrap', 'ListGroupItem'],
        commonjs2: 'react-bootstrap/lib/ListGroupItem',
        commonjs: 'react-bootstrap/lib/ListGroupItem',
        amd: 'react-bootstrap/lib/ListGroupItem'
      }
    },
    {
      'react-bootstrap/lib/ModalTrigger': {
        root: ['ReactBootstrap', 'ModalTrigger'],
        commonjs2: 'react-bootstrap/lib/ModalTrigger',
        commonjs: 'react-bootstrap/lib/ModalTrigger',
        amd: 'react-bootstrap/lib/ModalTrigger'
      }
    },
    {
      'react-bootstrap/lib/OverlayTrigger': {
        root: ['ReactBootstrap', 'OverlayTrigger'],
        commonjs2: 'react-bootstrap/lib/OverlayTrigger',
        commonjs: 'react-bootstrap/lib/OverlayTrigger',
        amd: 'react-bootstrap/lib/OverlayTrigger'
      }
    }
  ],

  node: {
    buffer: false
  },

  plugins
};
