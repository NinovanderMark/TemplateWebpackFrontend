const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        compress: false,
        static: false,
        client: {
            logging: "warn",
            overlay: {
                errors: true,
                warnings: false
            },
            progress: true
        },
        port: 1234, host: "127.0.0.1",
        devMiddleware: {
            writeToDisk: true,
        },
    },
  
});