var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var BUILD_DIR = path.resolve(__dirname + 'public');
var APP_DIR = path.resolve(__dirname + 'src');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    target: 'node',
    output: {
      path: BUILD_DIR,
      filename: 'js/bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    target: 'web',
    module: {
      rules: [
          {
            test: /\.tsx?$/,
            loaders: 'awesome-typescript-loader'
          },
      ]
    },
    devtool: 'source-map'
  };
