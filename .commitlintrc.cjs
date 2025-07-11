module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'docs',
        'build',
        'test',
        'ci',
        'chore',
        'style',
      ],
    ],
  },
};
