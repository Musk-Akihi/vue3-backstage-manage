/*
 * @Descripttion:
 * @TapdLink: https://XXX
 * @DesignsLink: https://XXX
 * @RelatedPersons: XXX[市场]、XXX[产品]、XXX[前端]、XXX[后端]、XXX[设计]
 * @version: 1.0.0
 * @Author: duxinwu
 * @Date: 2021-09-13 19:22:56
 * @LastEditors: duxinwu
 * @LastEditTime: 2021-09-13 21:32:53
 */
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
