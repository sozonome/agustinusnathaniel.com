/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'scope-enum': [
			2,
			'always',
			[
				'analytics',
				'api',
				'blog',
				'components',
				'constants',
				'layout',
				'pages',
				'services',
				'utils'
			]
		],
		'scope-case': [2, 'always', 'kebab-case']
	}
};

module.exports = CommitLintConfiguration;
