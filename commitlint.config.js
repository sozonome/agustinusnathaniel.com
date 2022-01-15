/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
	extends: ['@commitlint/config-conventional'],
	'scope-enum': [
		2,
		'always',
		['analytics', 'blog', 'components', 'layout', 'pages', 'utils', 'constants']
	],
	'scope-case': [2, 'always', 'kebab-case']
};

module.exports = CommitLintConfiguration;
