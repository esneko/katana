var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  node: {
    fs: 'empty'
  },
  entry: [
    'webpack-hot-middleware/client',
    './app/__tests__',
    './app'
  ],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new NpmInstallPlugin({
      cacheMin: 999999,
      saveDev: true,
      saveExact: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader?parser=postcss-scss'
      ]
    }]
  },
  postcss: function(webpack) {
    return [
      require('autoprefixer')(),
      require('precss')(),
      require('postcss-import')({
        addDependencyTo: webpack
      })
    ]
  }
}
