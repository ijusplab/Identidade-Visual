const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/lib/ijusplab.scss',
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'ijusplab.css'
        })
    ]
};