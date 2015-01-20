var webpack = require('webpack');

var plugins = [
];

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
    libraryTarget: 'var'
  },

  externals: {
    react: 'React',
    'react/lib/Object.assign': 'React.__spread',
    'react-router': 'ReactRouter',
    'react-bootstrap': 'ReactBootstrap',
    'react-bootstrap/Button': 'ReactBootstrap.Button',
    'react-bootstrap/MenuItem': 'ReactBootstrap.MenuItem',
    'react-bootstrap/NavItem': 'ReactBootstrap.NavItem',
  },

  node: {
    buffer: false
  },

  plugins: plugins
};
