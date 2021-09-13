// ESlint 检查配置
module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false
  },

  env: {
    browser: true,
    node: true,
    es6: true
  },

  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended', '@vue/prettier'],

  /**
   * 配置文档 https://cn.eslint.org/docs/rules/
   * 0 = off, 1 = warn, 2 = error
   */
  rules: {
    // 禁止使用分号
    semi: [2, 'never'],
    // 使用单引号
    quotes: [2, 'single'],
    // 禁止使用逗号
    'comma-dangle': [2, 'never'],
    // 允许console
    'no-console': 0,
    // production不允许有debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
