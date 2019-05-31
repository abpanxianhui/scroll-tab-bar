const path = require('path');
const webpack = require('webpack');
const merge= require('webpack-merge');
const base = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode:"development",
    target:"web",
    devtool:"source-map",
    entry:{
        runTime: 'babel-polyfill',
        app:path.resolve(__dirname,'../example/index.js')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude:/node_modules|lib/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: "8080",
        host: '0.0.0.0',
        compress: true,
        hot: true,
        historyApiFallback: true
    }
}

module.exports = merge(base,config);
