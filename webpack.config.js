const path = require('path');
const webpack = require('webpack');

const customPath = path.join(__dirname, './webpack/customPublicPath');

const config = {
    entry: {
        todoapp: [customPath, path.join(__dirname, './chrome/extension/todoapp')],
        background: [customPath, path.join(__dirname, './chrome/extension/background')],
        open: [customPath, path.join(__dirname, './chrome/extension/open')]
    },
    output: {
        path: path.join(__dirname, './build/js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: [
                'style',
                'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss'
            ]
        }]
    }
};


module.exports = config;
