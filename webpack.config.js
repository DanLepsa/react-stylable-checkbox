const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index')
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            {
              test: /\.(png|jpg|gif|pdf)$/,
              loader: require.resolve('url-loader')
            }

        ]
    },

    resolve: {
        modules: ['node_modules']
    },
};
