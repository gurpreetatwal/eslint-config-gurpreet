'use strict';

module.exports = {
  extends: 'xo',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'valid-jsdoc': ['error', {
      requireReturn: false,
      prefer: {
        returns: 'returns'
      }
    }],
    curly: ['error', 'multi', 'consistent'],
    'no-invalid-this': 'error',
    'no-magic-numbers': ['error', {
      'ignore': [0, 1],
      'enforceConst': true
    }],
    'vars-on-top': 'warn',
    'yoda': ['error', 'never', { 'exceptRange': true }],
    'callback-return': ['error', ['cb', 'callback', 'next', 'done']],
    'global-require': 'warn',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],
    'consistent-this': ['error', 'self'],
    'func-names': 'warn',
    'indent': ['error', 2, {
      SwitchCase: 1
    }],
    'max-len': ['warn', 80, 2, {
      ignoreComments: true,
      ignoreUrls: true
    }],
    'newline-after-var': 'warn',
    'newline-before-return': 'warn',
    'newline-per-chained-call': 'error',
    'no-bitwise': 'warn',
    'object-curly-spacing': 'error',
    'object-property-newline': ['error', {
      'allowMultiplePropertiesPerLine': true
    }],
    'space-before-function-paren': ['error', 'never'],
  }
};
