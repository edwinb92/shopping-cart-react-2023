const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefreshModule = require('eslint-plugin-react-refresh');
const reactRefresh = reactRefreshModule.default || reactRefreshModule;

module.exports = [
	{
		ignores: ['dist/**', 'node_modules/**'],
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			parser: tsParser,
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...tsPlugin.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'no-undef': 'off',
			'react-hooks/set-state-in-effect': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			quotes: ['error', 'single'],
			indent: ['error', 'tab'],
		},
	},
];
