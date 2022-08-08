const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },

    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        proxy: [
            {
              context: ['/login/api', '/signup/api'],
              target: 'http://localhost:3000/',
            },
        ],
    },

    module: {
        rules: [
            {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
            },
            {
              test:/\.s?css$/,
              use: ["style-loader", "css-loader", "sass-loader"],
            },
      
          ]
    },
      
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ],

}