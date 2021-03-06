var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/standalone/public',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ],
      },
    ],
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
};
