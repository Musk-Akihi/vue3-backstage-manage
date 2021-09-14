module.exports = {
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
