const path = require('path');
const webpack = require('webpack');

const customPath = path.join(__dirname, './webpack/customPublicPath');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const config = {
    entry: {
        app: [customPath, path.join(__dirname, './chrome/app')],
        background: [customPath, path.join(__dirname, './chrome/background')]
    },
    output: {
        path: path.join(__dirname, './build/js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
        new webpack.IgnorePlugin(/jsdom$/),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                READING_KEY: JSON.stringify(process.env.READING_KEY),
                READING_DOMAIN: JSON.stringify(process.env.READING_DOMAIN),
                READING_DATABASE: JSON.stringify(process.env.READING_DATABASE),
                READING_STORAGE: JSON.stringify(process.env.READING_STORAGE)
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
        }, {
            test: /\.json/,
            loader: 'json-loader'
        }, {
            test: /\.md/,
            loader: 'markdown-loader'
        }]
    },
    node: {

    }
};


module.exports = config;
