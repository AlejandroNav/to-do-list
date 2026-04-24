const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        static: {
            directory: './dist',
        },
        historyApiFallback: true,
        watchFiles: ['./src/template.html'],
        devMiddleware: {
            writeToDisk: true,
        },
    },
});