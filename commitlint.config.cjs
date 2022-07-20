/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'scope-enum': [
			2,
			'always',
			['analytics', 'api', 'blog', 'components', 'layout', 'pages', 'utils', 'constants']
		],
		'scope-case': [2, 'always', 'kebab-case']
	}
};

module.exports = CommitLintConfiguration;
