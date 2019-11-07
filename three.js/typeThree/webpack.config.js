const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve('./dist'),
		filename: "util/bundle[hash:5].js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			title: '俄罗斯方块',
			filename: 'index.html'
		})
	],
	module: {
		rules: [{
			test: /.ts$/,
			loader: "ts-loader"
		}]
	},
	resolve: {
		extensions: [".ts", ".js"]
	}
}