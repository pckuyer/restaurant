const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    menu: './src/menu/menu.js'
  },
  // resolve: {
  //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //   // alias: {
  //   //   menu: path.resolve(__dirname, 'src/menu/')
  //   // },
  // },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant page'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },  
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        },
      ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};