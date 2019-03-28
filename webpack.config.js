const webpack = require('webpack');
const path = require('path');
const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('development')
};

module.exports = {
	devtool: 'inline-source-map',
    entry: {
        //vendor: ['react', 'react-dom'],
        app: './src/index.js'
    },
	target: 'web',
	output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: 'dist',
        filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin(GLOBALS),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: 'config'
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				noInfo: false,
				debug: true,
			}
		}),
	],
	devServer: {
        hot: true,
        inline: true,
        port: '8083',
        historyApiFallback: true
	},
	resolve: {
		extensions: ['.js', '.jsx', '.less', '.scss', '.css', "ico"],
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.join(__dirname, './src')
		],
		alias: {
			"reducers": path.resolve(__dirname, "src/reducers"),
			"store": path.resolve(__dirname, "src/store"),
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(less)$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},
			{
				test: /\.(svg|eot|ttf|woff|woff2)$/,
				use: ['file-loader?limit=5000&name=fonts/[name].[ext]']
			},
			{
				test: /\.(jpe?g|png|gif|mp3|mp4|ico)$/i,
				use: ['file-loader?name=[name].[ext]']
			}
		]
	}
};
