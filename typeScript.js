const tsEslintPlugin = require('@typescript-eslint/eslint-plugin')
const tsEslintParser = require('@typescript-eslint/parser')

module.exports = [
  {
    // 配置项的名称，用于标识该配置，此处可理解为基于 'typescript-eslint/base' 的配置
    name: 'typescript-eslint/base',
    languageOptions: {
      parser: tsEslintParser, // 指定解析 TypeScript 文件所使用的解析器为 tsEslintParser
      sourceType: 'module',
    },
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...tsEslintPlugin.configs.recommended.rules, // 合并 @typescript-eslint/eslint-plugin 推荐配置中的规则
      '@typescript-eslint/no-confusing-non-null-assertion': 'error', // 禁止使用容易造成混淆的非空断言操作符
      '@typescript-eslint/no-explicit-any': 'off', // 允许在代码中使用 any 类型
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin, // 注册 '@typescript-eslint' 插件，使其规则和功能在后续 ESLint 检查中可用
    },
  },
]
