const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')


module.exports = {
	/**
	 * This is the main entry point for your application, it's the first file
	 * that runs in the main process.
	 */
	entry: './src/main.js',
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' })
	],

	// Put your normal webpack config below here
	module: {
		rules: require('./webpack.rules'),
	},
};
