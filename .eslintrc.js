module.exports = {
  root: true, // prevents ESLint from searching for the configuration file all the way up to the root directory of the filesystem
  env: {
    browser: true, // for ESLint to be aware of browser global variables
    node: true, // for ESLint to be aware of Node.js global variables and scoping
    es6: true, // for ESLint to be aware of ES6 global variables (this automatically enables ES6 syntax)
    jest: true // for ESLint to be aware of Jest global variables
  },
  parser: '@typescript-eslint/parser', // TypeScript
  parserOptions: {
    parser: '@typescript-eslint/parser' // TypeScript
  },
  plugins: [
    '@typescript-eslint', // TypeScript
    'prettier' // always
  ],
  extends: [
    'eslint:recommended', // always (set of rules recommended by ESLint team)
    'plugin:@typescript-eslint/recommended', // TypeScript
    'prettier' // always
  ],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        semi: true,
        singleQuote: true,
        printWidth: 120,
        endOfLine: 'auto'
      },
      {
        usePrettierrc: false
      }
    ]
  }
};
/* Note : ESLint Rule Level
"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
"error" or 2 - turn the rule on as an error (exit code is 1 when triggered) */
