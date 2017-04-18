var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/script/app.js'
	},
	output: {
		path: __dirname + '/build',
		filename: '[name]_[hash].js'
	},
	devServer:{
		contentBase: './build',
		host: 'localhost',
		port: 8000
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader!babel-loader'
		},{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		},{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader!sass-loader'
			})
		}]
	},
	plugins: [
	//css抽离插件
	new ExtractTextPlugin({
		filename: '[name]_[hash].css',
		allChunks: true,
		disable: false
	}),
	//根据模板自动生成html
	new HtmlWebpackPlugin({
		template: './src/index.ejs',
		output: 'index.html',
		title: 'FirstApp'
	}),
	//压缩代码
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		output: {
			comments: false
		}
	})
	]
}