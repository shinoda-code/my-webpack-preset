const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = ({outputFile, assetFile}) => ({
    entry: {
        app:'./src/app.js',
        sub:'./src/sub.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: `${outputFile}.js`, 
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
                    filename: `./images/${assetFile}.[ext]`,
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
            filename: `${outputFile}.css` //分割
        }),
        new HtmlWebpackPlugin ({
            template: './src/index.html',
            inject: 'body', //分割
        }),
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        }),
    ]
});