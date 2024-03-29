const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: '/client/app.jsx',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
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
                            ['@babel/preset-env'],
                            ['@babel/preset-react']
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192, // Use url-loader for files smaller than 8kb, otherwise fallback to file-loader
                    },
                  },
                ],
              }
        ]
    },
    devServer: {
        static: {
          publicPath: '/',
          directory: path.resolve(__dirname)
        }
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html', 
        })
    ]
};