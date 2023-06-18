module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json']
  },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'jsx-a11y',
    'react-hooks',
    'promise',
    'simple-import-sort',
    'import',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'off',
          parameterProperties: 'explicit',
        },
      },
    ],

    'max-len': ['error', 120],
    'no-console': 'warn',
    'no-var': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-access-state-in-setstate': 'error',
    'react/no-deprecated': 'error',
    'react/no-children-prop': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'brace-style': ['error', '1tbs'],
    'newline-per-chained-call': 'error',
    'no-extra-semi': 'error',
    'no-irregular-whitespace': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 1,
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-trailing-spaces': 'error',
    'prefer-const': 'error',
    'quote-props': ['error', 'as-needed'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'no-extra-boolean-cast': 'error',
    'react/no-unused-state': 'error',
    'require-await': 'error',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'enum', format: ['UPPER_CASE'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },

      { selector: 'typeAlias', format: ['PascalCase'] },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react'],
          // Library Packages
          ['^@?\\w'],
          // Internal components.
          ['^(~/components)(/.*|$)'],
          // Other Internal imports.
          ['^~'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    // Delete from Packages above
    "import/extensions": "off",
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/require-default-props': 'off' // Only for JS PropType
  },
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      plugins: ['testing-library'],
    },
  ],
};
