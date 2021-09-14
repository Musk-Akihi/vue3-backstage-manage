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
    ]
  ]
}
