const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/js/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.modules\.css$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
                //loaders: ['style', 'css'],
                include: __dirname + '/src/'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: './dist',
    },
    clearBeforeBuild: true,
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]

}