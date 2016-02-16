var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  node: {
    fs: 'empty'
  },
  entry: [
    'webpack-hot-middleware/client',
    './app/__tests__/index',
    './app/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new NpmInstallPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      request: 'browser-request'
    }
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass', 'postcss'],
      include: path.join(__dirname, 'public/styles')
    }]
  },
  postcss: [autoprefixer]
}
