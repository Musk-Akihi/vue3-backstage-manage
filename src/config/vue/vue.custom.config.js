const vueCustomConfig = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  devServer: {
    hot: true,
    open: true,
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}

module.exports = vueCustomConfig
