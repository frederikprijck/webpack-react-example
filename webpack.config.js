const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: ROOT,

    entry: './app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js'
    },

    resolve: {
        modules: ["node_modules", __dirname + "/"]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-1"]
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                }),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=images/&limit=1000000',
                    'image-webpack-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack - React',
            template: 'app.html',
            filename: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin('css/style.css')
    ],

    devtool: 'cheap-module-source-map',

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};