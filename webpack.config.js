/* jshint esversion:6 */
const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: path.resolve(__dirname,".\\js\\characterCreator.js"),
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dndTools\\characterCreator\\"),
		publicPath: "dndTools/characterCreator/",
		filename: "index.js",
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.(.js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["env", "es2015", "react"]
				}
			},
			{
				test: /].css$/,
				use: [ "style-loader", "css-loader" ]
			}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	devtool: "source-map",
	plugins: [ new webpack.HotModuleReplacementPlugin() ]
};