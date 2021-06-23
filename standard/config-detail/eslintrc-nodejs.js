module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends:  ['eslint:recommended', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 12
    },
    parser: 'babel-eslint',
    rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'never'
		]
	}
};
