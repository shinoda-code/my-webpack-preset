const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'source-map',

    entry: {
        app:'./src/app.js',
        sub:'./src/sub.js'
    },
    // entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[chunkhash].bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader',
                     MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|woff2?|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: './images/[contenthash].[ext]',
                },
            },
                {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }                
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin ({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin ({
            template: './src/index.html',
            inject: 'body',
        })
    ]
}