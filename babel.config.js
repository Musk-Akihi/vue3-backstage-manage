const plugins = []
if (process.env.NODE_ENV === 'production') {
  // 移除console
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 按需引入ant-design-vue样式
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: true
      }
    ],
    ...plugins
  ]
}
