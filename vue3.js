const tsEslint = require('@typescript-eslint/eslint-plugin')
const pluginVue = require('eslint-plugin-vue')
const parserVue = require('vue-eslint-parser')

module.exports = [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        parser: tsEslint.parser,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: pluginVue,
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...pluginVue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
      //...更多配置规则
    },
  },
]
