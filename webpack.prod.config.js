/*
 * @Description: 
 * @Author: ypeng
 * @Date: 2019-11-14 14:41:38
 * @LastEditors: ypeng
 */ 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseCfg = require('./webpack.base.config');
const path = require("path");

const config = Object.assign({
  mode: "production",
  output: {
    publicPath: 'http://localhost:5500',
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:8].js", // 针对 entry js 的名称
    chunkFilename: "[name].[chunkhash:8].js",
  },
}, baseCfg)


config.plugins.push(
  new CleanWebpackPlugin(),
)

module.exports = config;