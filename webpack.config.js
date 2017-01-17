/**
 * Created by zhouhuang on 2017/1/17.
 */
/**
 *
 * .css 文件使用 style-loader 和 css-loader 来处理
 * .js 文件使用 jsx-loader 来编译处理
 * .scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
 * 图片文件使用 url-loader 来处理，小于8kb的直接转为base64
 */
var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        },{
            test: /\.css$/, loader: 'style-loader!css-loader'
        },{
            test: /\.scss$/, loader: 'style!css!sass?sourceMap'
        },{
            test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};