/* jshint esversion:6 */
const path = require("path");

var config = {
	entry: ".\\js\\characterCreator.js",
	output: {
		path: path.resolve(__dirname, "dndTools\\characterCreator\\"),
		filename: "index.js",
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ["es2015", "react"]
				}
			}
		]
	},
	devtool: "source-map",
	mode: "development"
}
module.exports = config;