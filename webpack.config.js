const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development' ? true : false;

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}

	if (!isDev) {
		config.minimizer = [
			new OptimizeCssAssetsPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
	const loaders = [{
		loader: MiniCssExtractPlugin.loader,
	}, 'css-loader']

	if (extra) {
		loaders.push(extra)
	}
	return loaders
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: ['@babel/polyfill','./index.js'],
		analytics: './analytics.js'
	},
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.json', '.png'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@models': path.resolve(__dirname, 'src/models'),
			"@assets": path.resolve(__dirname, 'src/assets'),
		}
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: !isDev
			}
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist') },
			],
		}),
		new MiniCssExtractPlugin({
			filename: filename('css'),
		})

	],
	optimization: optimization(),
	devServer: {
		port: 4200,
		hot: isDev
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: cssLoaders()
			},
			{
				test: /\.less$/,
				use: cssLoaders('less-loader'),
			},
			{
				test: /\.s[ac]ss$/,
				use: cssLoaders('sass-loader')
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader']
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{
				test: /\.csv$/,
				use: ['csv-loader']
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							'@babel/plugin-proposal-class-properties'
						]
					}
				}
			}
		]
	}
}