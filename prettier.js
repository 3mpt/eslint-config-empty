module.exports = {
  // plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 120, // 每行代码的最大长度，超出此长度会换行。
  tabWidth: 2, // 每一级缩进的空格数量。
  useTabs: false, // 不使用 Tab 缩进，使用空格代替。
  semi: false, // 语句末尾不添加分号。
  singleQuote: true, // 使用单引号而不是双引号。
  jsxSingleQuote: true, // 在 JSX 中使用单引号。
  trailingComma: 'es5', // 在 ES5 中有效的尾随逗号（对象、数组等），例如：`{ a: 1, b: 2, }`。
  bracketSpacing: true, // 在对象的大括号 `{}` 内两侧添加空格，如 `{ foo: bar }`。
  jsxBracketSameLine: true, // JSX 标签的 `>` 与属性在同一行。
  arrowParens: 'always', // 省略单参数箭头函数的括号，例如 `x => x`。
  vueIndentScriptAndStyle: true, // 不对 `<script>` 和 `<style>` 标签内容进行缩进。
  requirePragma: false, // 不要求在文件顶部添加 `@prettier` 或 `@format` 注释来格式化文件。
  insertPragma: false, // 不自动在文件顶部插入 `@prettier` 或 `@format` 注释。
  proseWrap: 'preserve', // 保持原样，不对 Markdown 文本进行强制换行。
  // importOrder: ['<THIRD_PARTY_MODULES>', '^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  // importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
  // importOrderCaseInsensitive: true,
}
