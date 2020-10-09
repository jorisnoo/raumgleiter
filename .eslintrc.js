module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  globals: {
    'PIXI': true,
    'gsap': true,
  },
  plugins: [
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/script-indent': ['warn', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/html-indent': ['warn', 2],
    'vue/max-attributes-per-line': ['error', { singleline: 2 }],
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
    }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
};
