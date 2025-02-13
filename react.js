const babelParser = require('@babel/eslint-parser')
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
module.exports = [
  {
    name: 'react-eslint',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: reactPlugin, // 注册'react' 插件，用于支持 React 相关的规则检查
      'react-hooks': reactHooksPlugin, // 注册'react-hooks' 插件，用于支持 React Hooks 相关规则检查
    },
    languageOptions: {
      // 合并'react' 插件推荐配置中的语言选项相关配置，例如设置支持的 JSX 相关语法等
      ...reactPlugin.configs.recommended.languageOptions,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules, // 合并'react' 插件推荐配置中的规则
      'react/react-in-jsx-scope': 'off', // 确保了 React 在 JSX 环境中的可用性，关闭规则检查
      'react-hooks/rules-of-hooks': 'error', // 严格检查 React Hooks 的使用规则，若违反会以错误形式提示
      'react-hooks/exhaustive-deps': 'warn', // 用于检查 Effect 的依赖是否完整，若有问题会以警告形式提示
      '@typescript-eslint/no-require-imports': 'off', // 允许在 TypeScript 代码中使用 require 进行模块导入
      'react/jsx-no-bind': 'off',
      'react/prop-types': 'off',
      /* 为解决"React" was used before it was defined 问题 */
      'no-use-before-define': 'off',

      /* 允许不添加组件的displayName属性 */
      'react/display-name': 'off',

      /* 禁止 jsx 中使用无用的引号 */
      'react/jsx-curly-brace-presence': ['error', 'never'],

      /* 数组中的 jsx 必须有 key */
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
        },
      ],

      /* 禁止出现 href="javascript:void(0)" */
      'react/jsx-no-script-url': 'error',

      /* 禁止无意义的 Fragment 组件 */
      'react/jsx-no-useless-fragment': 'error',

      /* 必须使用 <></> 而不是 React.Fragment */
      'react/jsx-fragments': ['error', 'syntax'],

      /* 组件的名称必须符合 PascalCase */
      'react/jsx-pascal-case': 'error',

      /* 禁止在 componentDidUpdate 里使用 setState */
      'react/no-did-update-set-state': 'error',

      /* 禁止在 React.PureComponent 中使用 shouldComponentUpdate */
      'react/no-redundant-should-component-update': 'error',

      /* 禁止在函数组件中使用 this */
      'react/no-this-in-sfc': 'error',

      /* 禁止组件的属性或生命周期大小写错误 */
      'react/no-typos': 'error',

      /* 必须使用 Class 的形式创建组件 */
      'react/prefer-es6-class': ['error', 'always'],

      /* 组件内没有 children 时，必须使用自闭和写法 */
      'react/self-closing-comp': 'error',

      /* 类的静态属性必须使用 static 关键字定义 */
      'react/static-property-placement': 'error',
      /* style 属性的取值必须是 object */

      'react/style-prop-object': 'error',

      /* img, br 标签中禁止有 children */
      'react/void-dom-elements-no-children': 'error',
    },
    settings: {
      react: {
        // 设置 React 版本为自动检测，让 ESLint 相关插件根据项目实际使用的 React 版本来应用合适的规则和检查逻辑
        version: 'detect',
        fragment: 'Fragment',
        createClass: 'createReactClass', // Regex for Component Factory to use,
        pragma: 'React', // Pragma to use, default to "React"
        flowVersion: '0.53',
      },
    },
  },
  {
    name: 'babel-parser',
    languageOptions: {
      // 配置解析器支持的语法相关的详细选项
      parser: babelParser, // 指定使用 babelParser 作为解析器，以支持解析经过 Babel 处理的代码语法
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 启用 JSX 语法解析
        },
        babelOptions: {
          babelrc: false, // 不使用项目中的.babelrc 文件来配置 Babel
          configFile: false, // 不使用单独的配置文件来配置 Babel
          browserslistConfigFile: false, // 不使用 browserslist 配置文件（通常与 Babel 针对不同浏览器兼容性处理相关）
          presets: ['@babel/preset-env', '@babel/preset-react'], // 指定使用的 Babel 预设，这里使用 '@babel/preset-env'，它可以根据目标环境自动转换 ES 新特性语法为兼容的旧语法
          plugins: [['@babel/plugin-proposal-decorators', { version: '2023-11' }]],
        },
        requireConfigFile: false, // 不要求必须有配置文件来进行解析器相关配置
      },
    },
  },
]
