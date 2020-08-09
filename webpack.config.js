const path = require('path');
const Dotenv = require('dotenv-webpack');
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
     new Dotenv({
       safe: true,
     })
    // new BundleAnalyzerPlugin()
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
    minimizer: [new TerserPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
};