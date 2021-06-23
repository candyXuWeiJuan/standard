module.exports = {
	eslint: {
		'vue2 + js': [
			'@vue/eslint-config-prettier',  
			'babel-eslint',
			'eslint',
			'eslint-plugin-prettier',
			'eslint-plugin-vue',
			'prettier@2.2.1'
		],
		'vue2 + ts': [
			'@typescript-eslint/eslint-plugin',
    		'@typescript-eslint/parser',
			'@vue/eslint-config-prettier',
			'@vue/eslint-config-typescript',
			'eslint',
			'eslint-plugin-prettier',
			'eslint-plugin-vue',
			'prettier@2.2.1'
		],
		'vue3 + js': [
			'@vue/eslint-config-prettier',  
			'babel-eslint',
			'eslint',
			'eslint-plugin-prettier',
			'eslint-plugin-vue',
			'prettier@2.2.1'
		],
		'vue3 + ts': [
			'eslint',
			'eslint-plugin-prettier',
			'eslint-plugin-vue',
			'prettier@2.2.1',
			'@typescript-eslint/eslint-plugin',
    		'@typescript-eslint/parser',
			'@vue/eslint-config-prettier',
    		'@vue/eslint-config-typescript',
		],
		'node + js': [
			'eslint',
			'eslint-plugin-prettier',
			'eslint-config-prettier',
			'prettier@2.2.1'
		],
		'node + ts': [
			'@typescript-eslint/eslint-plugin',
			'@typescript-eslint/parser',
			'eslint',
			'prettier@2.2.1',
			'eslint-config-prettier',
			'eslint-plugin-prettier'
		]
	},
	husky: ['@commitlint/config-conventional@9', '@commitlint/cli@9', 'husky@4', 'lint-staged'],
	prettier: {
		vue: ['prettier@2.2.1', '@prettier/plugin-pug'],
		node: ['prettier@2.2.1']
	}
}
