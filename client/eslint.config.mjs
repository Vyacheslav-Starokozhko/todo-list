import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        rules: {
            'arrow-body-style': 'off',
            'prefer-arrow-callback': 'off',
            'import/prefer-default-export': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'no-plusplus': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            'prefer-const': 'warn',
            'function-paren-newline': 'off',
            'object-shorthand': 'warn',
            'no-multi-spaces': 'error',
            'no-restricted-imports': 'warn',
            quotes: ['error', 'single'],
            'max-len': [
                'error',
                {
                    code: 110,
                    ignorePattern: 'd="([\\s\\S]*?)"',
                },
            ],
            'max-lines': [
                'error',
                {
                    max: 600,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ],
            'no-console': [
                'warn',
                {
                    allow: ['warn', 'error'],
                },
            ],
            'import/order': [
                'error',
                {
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'newlines-between': 'always',
                    groups: [
                        ['builtin', 'external'],
                        ['internal'],
                        ['parent', 'sibling', 'index'],
                    ],
                    pathGroups: [
                        {
                            pattern: '**/*.css',
                            group: 'index',
                            position: 'after',
                        },
                        {
                            pattern: '**/*.scss',
                            group: 'index',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin', 'external'],
                },
            ],
        },
    },
];
