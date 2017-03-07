const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const helpers = require('./helpers')

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
})

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['*', '.js', '.ts', '.scss', '.json']
    },

    module: {
        rules: [{
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            }, {
                test: /\.html$/,
                use: ['raw-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file?name=assets/[name].[hash].[ext]'
            }, {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: 'raw-loader'
            }, {
                test: /\.(scss)$/,
                include: helpers.root('src', 'app'),
                loaders: ['to-string-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.scss$/,
                exclude: helpers.root('src', 'app'),
                loader: extractSass.extract({
                    use: [{
                        loader: "to-string-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [helpers.root('src/styles')]
                        }
                    }, {
                        loader: "resolve-url-loader"
                    }],
                    fallback: "style-loader" // use style-loader in development
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                use: 'file-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
        ]
    },

    plugins: [

        extractSass,

        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src')
        ),

        new CommonsChunkPlugin({
            name: 'polyfills',
            chunks: ['polyfills']
        }),

        // This enables tree shaking of the vendor modules
        new CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['main'],
            minChunks: module => /node_modules/.test(module.resource)
        }),

        // Specify the correct order the scripts will be injected in
        new CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/assets/icons/favicon.ico'
        })
    ]
};
