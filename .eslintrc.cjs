module.exports = {
  extends: [
    'taro/react',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  plugins: ['prettier'],
}
