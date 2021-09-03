const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  devtool: 'source-map',
  plugins: [],
});
