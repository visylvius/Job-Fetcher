var webpack = require('webpack');
var path = require('path');


module.exports = {
  // We change to normal source mapping
  devtool: 'inline-sourcemap',
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/, loader: ['style', 'css', 'sass']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
