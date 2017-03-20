const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const commonConfig = require('./webpack.common.js')
const helpers = require('./helpers')
require('dotenv').config({
    path: 'environment/.env'
})

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('src'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        // Env helpers: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(process.env.ENV),
            'API_URL': JSON.stringify(process.env.API_URL),
            'process.env': {
                'ENV': JSON.stringify(process.env.ENV),
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'API_URL': JSON.stringify(process.env.API_URL),
                'PORT': JSON.stringify(process.env.PORT),
            }
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        port: process.env.PORT || 8080
    }
})
