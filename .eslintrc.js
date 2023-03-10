module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    overrides: [],
    parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'i18next', 'react-hooks', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        'import/no-unresolved': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['warn', {
            markupOnly: true
        }],
        'no-undef': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off'
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    }
}
