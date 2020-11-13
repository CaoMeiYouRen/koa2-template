const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    globals: {
    },
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
        mocha: true,
        jest: true,
    },
    extends: [
        'cmyr',
    ],
    plugins: [
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: new Date().getFullYear(),
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    parser: '@typescript-eslint/parser',
    rules: {
        'no-console': 0,
    },
}
