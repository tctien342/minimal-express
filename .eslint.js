module.exports = {
	parser: 'babel-eslint',
	extends: ['plugin:flowtype/recommended'],
	plugins: ['require', 'import', 'flowtype'],
	env: {
		node: true,
	},
};
