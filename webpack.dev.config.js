const baseCfg = require('./webpack.base.config');

module.exports = Object.assign({

  devServer: {
    contentBase: "./dist",
    port: 8888,
    historyApiFallback: true,
    inline: true,
    hot: true,
  },

}, baseCfg)