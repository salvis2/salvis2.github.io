/* jshint esversion:6 */
const path = require("path");
const webpack = require("webpack");
/*
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "/src/dndTools/characterCreator/index.html"),
	filename: "./index.html"
});
*/
module.exports = {
	entry: path.join(__dirname, "/public/javascripts/characterCreator.jsx"),
	output: {
		path: path.join(__dirname, "/public/javascripts/"),
		filename: "index.js"
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["env", "es2015", "react"]
				}
			},
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader" ]
			},
			{
				test: /node_modules\/(pdfkit|fontkit|png-js|linebreak|unicode-properties|brotli)\//,
				loader: "transform-loader?brfs"
			},
			{
				test: /node_modules\/unicode-properties.*\.json$/,
				use: "json-loader"
			}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	/*
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		htmlWebpackPlugin
	],
	*/
	node: {
		fs: "empty",
		child_process: "empty"
	}
};
