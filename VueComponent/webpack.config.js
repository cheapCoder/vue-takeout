const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        // include: path.resolve(__dirname, 'src'),
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]',
          outputPath: 'images'
        },
      }
    ]
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    contentBase: './dist',
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: {'^/api' : ''}
      }
    },
    // quiet: true,
    publicPath: '/',
    historyApiFallback: true,
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: '/index.html',
      // publicPath: ''
    
    }),
    // new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  // devtool: 'cheap-module-eval-source-map'
  devtool: 'cheap-module-source-map'
}