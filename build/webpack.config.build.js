const path  =  require('path');
const glob = require("glob-all");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge');
const PurifyCSS = require("purifycss-webpack");
const base = require('./webpack.config.base')

const config = {
    mode:"production",
    devtool: false,
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname,'../lib'),
        library: "scroll-tab-bar",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new PurifyCSS({
            paths: glob.sync([
                path.resolve(__dirname, "../src/*.js"),
                path.resolve(__dirname, "../src/components/*.vue")
            ]),
            minimize: true
        }),
        new UglifyJSPlugin()
    ]
}

module.exports = merge(base,config);
