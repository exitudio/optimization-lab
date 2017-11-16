var UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { modules: false }]] //<< tree shaking
        }
      }
    ]
  },
  plugins: [
    // new UglifyJsPlugin()
  ]
};