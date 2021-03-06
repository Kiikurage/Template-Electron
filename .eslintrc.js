const path = require('path');

module.exports = {
    root: true,
    plugins: ['react', 'react-hooks', 'import', '@emotion'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'prettier'
    ],
    env: {
        es6: true,
        node: false,
    },
    ignorePatterns: ['./node_modules', './package.json', './package-lock.json'],
    rules: {
        'no-inner-declarations': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'error',
        '@emotion/jsx-import': 'off', // Babel plugin is used instead
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            plugins: ['@typescript-eslint'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: [path.resolve(__dirname, './tsconfig.json')],
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/typescript',
            ],
            rules: {
                '@typescript-eslint/no-empty-interface': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/no-enum': 'off',
                '@typescript-eslint/no-namespace': 'off',
                '@typescript-eslint/no-non-null-assertion': 'error',
                'no-restricted-syntax': [
                    'error',
                    {
                        selector: 'TSEnumDeclaration',
                        message: "Don't use enums. Use union type instead.",
                    },
                ],
            },
        },
        {
            files: ['.eslintrc.js', 'webpack.config.js', 'babel.config.js', '.prettierrc.js', 'jest.config.js'],
            env: {
                node: true,
            },
        },
    ],
};
