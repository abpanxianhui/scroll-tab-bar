const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require("path")

const config = {
    target:"web",
    entry: ['./src/index.js'],
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, '../postcss.config.js')
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|ttf|woff|eot|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name:'style/fonts/[name].[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
         new VueLoaderPlugin()
    ],
}

module.exports = config;
