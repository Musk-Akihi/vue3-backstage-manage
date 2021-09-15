const {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave,
  productionSourceMap,
  devServer
} = require('./src/config/vue/vue.custom.config')

module.exports = {
  publicPath,
  outputDir,
  assetsDir,
  lintOnSave,
  productionSourceMap,
  devServer,
  css: {
    loaderOptions: {
      /**
       * less解析语法报错
       * less-loader配置里开启允许javascript（less3.x以上需要配置lessOptions）
       */
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}
