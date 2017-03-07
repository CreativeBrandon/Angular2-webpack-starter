const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common.js')
const helpers = require('./helpers')

/*
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const API_URL = process.env.API_URL = 'localhost';
const HMR = helpers.hasProcessFlag('hot')
const METADATA = webpackMerge(commonConfig, {
    host: 'localhost',
    api_url: API_URL,
    port: 8080,
    ENV: ENV,
    HMR: HMR
})*/

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
})
