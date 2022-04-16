module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb'],
  globals: {
    google: true,
    tomtom: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    semi: 'off',
    'linebreak-style': 'off',
    'max-len': [2, 140, 4],
    'vue/no-v-html': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'vue/attribute-hyphenation': 'off',
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
  },
};
