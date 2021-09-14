const vueCustomConfig = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
}

module.exports = vueCustomConfig
