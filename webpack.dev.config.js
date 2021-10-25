const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const outPath = path.resolve(__dirname, 'dist')
const packageContent = fs.readFileSync(path.resolve(__dirname, "package.json"), {
    encoding: "utf8"
})
const packageInfos = JSON.parse(String(packageContent))

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
            title: packageInfos.name,
            filename: "index.html",
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            minify: true,
        }),
        new MiniCssExtractPlugin({filename: "css/style.css"}),
    ],
    module: {
        rules: [{
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: {
                        list: [{
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
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                        ]
                    }
                },
                exclude: /node_modules/ //排除转换目录
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }, {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
            new UglifyJsPlugin({
                parallel: true
            }),
            new CssMinimizerPlugin(),
        ],
    }
}
