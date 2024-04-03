const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/app.jsx',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.(mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'audio/',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname),
        },
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
};
