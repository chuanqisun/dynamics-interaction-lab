const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx', 
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }, 
      { test: /\.css/, use: ['style-loader', 'css-loader']},
      { test: /\.(ttf|eot|woff|woff2)$/, use: 'file-loader'},
      { test: /\.svg$/, use: 'react-svg-loader'}
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    chunkFilename: '[name].[chunkhash].js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    publicPath: '/dist'
  },
};