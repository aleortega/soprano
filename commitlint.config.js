module.exports = {
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['configuration', 'documentation', 'code', 'test']
    ],
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', ['add', 'fix', 'remove', 'update', 'refactor']],
    'subject-empty': [2, 'never']
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(.*)\]\ - (.*) - (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  }
};
