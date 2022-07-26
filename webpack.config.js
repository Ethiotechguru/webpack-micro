const path = require('path')
const MiniCssExtractPlugIn = require('mini-css-extract-plugin')
let mode = "development";
if(process.env.NODE_ENV === "production"){
    mode = "production";
}
module.exports = {
	mode: mode,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugIn.loader,"css-loader"],
			},
		],
	},
    plugins:[new MiniCssExtractPlugIn()],
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "/dist"),
		},
        hot:true
	},
};