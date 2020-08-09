const path = require('path');
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://reactjs.org/docs/optimizing-performance.html#webpack
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: { 
    index: './src/index.tsx'
  },
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: '../snippets/script-tags.liquid',
      inject: false,
      templateContent: ({ htmlWebpackPlugin }) => `
        ${htmlWebpackPlugin.files.js.map((file) => `<script src="{{ '${file.split("../assets/")[1]}' | asset_url }}" defer></script>`).join("")}
      `,
      scriptLoading: 'defer'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/theme', to: '../../dist' },
      ],
    }),
    new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.liquid' ],
  },
  output: {
    filename: 'theme.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ /* additional options here */ })],
    splitChunks: {
      chunks: 'all',
    },
  },
};