var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'stage-1', 'env']
        }
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: './images/[name].[ext]',
            limit: 50000
          }
        }
      }
    ]
  },
  devServer: {
  historyApiFallback: true,
  contentBase: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]

};
