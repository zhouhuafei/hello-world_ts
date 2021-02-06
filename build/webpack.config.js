const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', 'tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: '8089'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), 'dist')]
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
}
