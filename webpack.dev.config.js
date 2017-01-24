var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    './src/index.js'
  ],
  output: {
     path: path.resolve(__dirname, 'public'),
     filename: 'bundle.js',
    },
  watch: true,
  devtool: 'eval',
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:1337/',
        secure: false
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!sass'
      }
    ],
  },
  resolve: {
		extensions: ['', '.js', '.jsx']
	},
  plugins : [
      new webpack.HotModuleReplacementPlugin(),  
      new webpack.NoErrorsPlugin()
    ]
};