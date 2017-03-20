const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.common.js')
const helpers = require('./helpers')
require('dotenv').config({
    path: 'environment/.prod.env'
})

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
        }),
        //new ExtractTextPlugin('[name].[hash].css'),
        new CopyWebpackPlugin([
            { from: 'src/manifest.webapp', to: '' },
            { from: 'src/service-worker.register.js', to: '' }
        ]),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['service-worker.register.js'],
            append: false
        }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false // workaround for ng2
            }
        }),
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
    ]
});
