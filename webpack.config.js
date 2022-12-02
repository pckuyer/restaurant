const path = require('path');

  module.exports = {
  	mode: 'development',
	entry: './src/index.js',
	output: {
	  filename: '[name].bundle.js',
	  path: path.resolve(__dirname, 'dist'),
	},
  devServer: {
	static: './dist',
  },
  optimization: {
	runtimeChunk: 'single',
  },
};