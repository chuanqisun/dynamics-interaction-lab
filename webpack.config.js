const path = require('path');

module.exports = {
  mode: "development",
  devtool: 'inline-source-map', // compile js into main.js bundle, sourcemap = map the single file as bundle to the original javascript code
  entry: "./src/index.tsx", 
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }, 
      // match the string by look at the file name if it matches with regex of test -> it will use ts-loader to transpile
      // compile = turn not machine readable to what machine readable
      // transpile = change the level of spec, but the output still run by browser
      { test: /\.css/, use: ['style-loader', 'css-loader']},
      { test: /\.(ttf|eot|woff|woff2)$/, use: "file-loader"},
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/dist/',
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "styled-components": "styled",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    publicPath: '/dist'
  },
};