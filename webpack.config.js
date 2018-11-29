const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.(css|scss)$/, 
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ]
              }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'index.html')
        })
      ]
};