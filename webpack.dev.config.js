const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const outPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    clean: true,
    path: outPath,
    filename: 'js/[id].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '猫的相册',
      filename: "index.html",
      template: "template/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              {
                tag: 'img',
                attribute: 'data-src',
                type: 'src',
              },
              {
                tag: 'img',
                attribute: 'data-srcset',
                type: 'srcset',
              },
            ],
          }
        }
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    https: false,
    compress: true,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ parallel: true }),
      new CssMinimizerPlugin(),
    ],
  }
};
