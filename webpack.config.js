const path = require('path');
const webpack = require('webpack');

const customPath = path.join(__dirname, './webpack/customPublicPath');

const config = {
    entry: {
        app: [customPath, path.join(__dirname, './chrome/app')],
        background: [customPath, path.join(__dirname, './chrome/background')],
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
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
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
