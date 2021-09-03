const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    port: 3000,
  },
  devtool: 'source-map',
  plugins: [],
});
