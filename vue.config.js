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
    extract: true,
    sourceMap: false,
    loaderOptions: {
      /**
       * less解析语法报错
       * less-loader配置里开启允许javascript（less3.x以上需要配置lessOptions）
       */
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      },
      /**
       * 全局引入变量和Mixin prependData允许全局引入scss文件
       */
      sass: {
        prependData: '@import "@/assets/style/index.scss";'
      }
    }
  },
  configureWebpack: {
    //警告 webpack 的性能提示
    performance: {
      hints: 'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  chainWebpack: (config) => {
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
    // 开启图片压缩
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
  }
}
