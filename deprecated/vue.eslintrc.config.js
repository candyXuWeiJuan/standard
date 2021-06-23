module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		// 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 0,
		indent: [
			'error',
			'tab',
			{
				ignoredNodes: ['TemplateLiteral'],
			},
		],
		// semi: ['error', 'always'],
		// quotes: ['error', 'single'],
		// // 格式化函数时，函数名称或function关键字与开始参数之间允许有空格。
		// 'space-before-function-paren': 0,
		// // 要求在数组括号内使用一个或多个空格、或折行
		// 'array-bracket-spacing': 2,
		// // 需要一致地使用数组元素之间的换行符
		// 'array-element-newline': ['error', 'consistent'],
		// //该规则强制在左花括号和同一行上的下一个 token 之间有一致的空格。该规则同样强制右花括号和在同一行的前一个 token 之间有一致的空格。
		// 'block-spacing': 2,
		// // 强制在代码块中使用一致的大括号风格
		// 'brace-style': 2,
		// // 要求使用骆驼拼写法
		// camelcase: 2,
		// // 强制在逗号周围使用空格
		// 'comma-spacing': ['error', { before: false, after: true }],
		// // 该规则禁止 if 语句作为唯一语句出现在 else 语句块中。
		// 'no-lonely-if': 2,
		// // 该规则允许止使用 空格 和 tab 混合缩进。 pretttier 会处理，可放开
		// 'no-mixed-spaces-and-tabs': 0,
		// //该规则禁止在以下情况使用否定表达式：含有 else 分支的 if 语句/三元表达式
		// 'no-negated-condition': 2,
		// // 要求正则表达式被包裹起来
		// 'wrap-regex': 2,
	},
};
