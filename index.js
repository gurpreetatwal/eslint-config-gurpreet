'use strict';

module.exports = {
  extends: 'xo',
  rules: {
  'valid-jsdoc': [2, {
			requireReturn: false,
			prefer: {
				returns: 'return'
			}
		}],
		curly: ['error', 'multi', 'consistent'],
		'guard-for-in': 1,
		'no-invalid-this': 2,
		'no-magic-numbers': ['error', {
			'ignore': [0, 1],
			'enforceConst': true
		}],
		'vars-on-top': 1,
		'yoda': ['error', 'never', { 'exceptRange': true }],
		'callback-return': [2, ['cb', 'callback', 'next', 'done']],
		'global-require': 1,
		'no-process-env': 2,
		'no-process-exit': 2,
		'block-spacing': 2,
		'brace-style': [2, '1tbs', {
			allowSingleLine: true
		}],
		'consistent-this': [2, 'self'],
		'func-names': 1,
		'indent': [2, 2, {
			SwitchCase: 1
		}],
		'max-len': [1, 80, 2, {
			ignoreComments: true,
			ignoreUrls: true
		}],
		'newline-after-var': 1,
		'newline-before-return': 1,
		'newline-per-chained-call': 2,
		'no-bitwise': 1,
		'object-curly-spacing': 2,
		'object-property-newline': [2, {
			'allowMultiplePropertiesPerLine': true
		}],
		'space-before-function-paren': [2, 'never'],
  }
};
