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
    plugins: [
        'react',
        'i18next',
        'react-hooks',
        '@typescript-eslint',
        'for-project-course-plugin',
        'unused-imports'
    ],
    rules: {
        '@typescript-eslint/consistent-type-imports': 'off',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        'n/no-callback-literal': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': 'off',
        indent: [2, 4],
        '@typescript-eslint/indent': 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        'import/no-unresolved': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['warn', {
            markupOnly: true,
            ignoreAttribute: [
                'justify',
                'align',
                'direction',
                'gap',
                'role',
                'as',
                'data-testid',
                'border'
            ]
        }],
        'no-undef': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        'for-project-course-plugin/path-cheker': ['error', { alias: '@' }],
        'for-project-course-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing']
            }
        ],
        'for-project-course-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPattern: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx']
            }
        ]
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    }
}
