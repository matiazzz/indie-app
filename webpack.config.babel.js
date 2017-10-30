import path from 'path';
import webpack from 'webpack';

module.exports = {

    entry: path.resolve(__dirname, 'public') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'frontend.bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};
