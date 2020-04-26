const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseCfg = require('./webpack.base.config');

const config = Object.assign({
  mode: "production",

}, baseCfg)


config.plugins.push(
  new CleanWebpackPlugin(),
)

module.exports = config;