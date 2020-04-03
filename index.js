module.exports = {
  extends: [ 'airbnb', 'plugin:jsdoc/recommended'],
  plugins: [
      'jsdoc',
  ],
  settings: {
    jsdoc: {
      ignorePrivate: true,
    },
    tagNamePreference: {
      "augments": "extends",
    }
  },
  rules: {
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'max-len': ['error', 120],
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-filename-extension': ['error', { "extensions": ['.js', '.ts'] }],
    'react/forbid-prop-types': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/state-in-constructor': ['off'],
    'eslint/check-examples': ['error', { paddedIndent: 2 }],
    'class-methods-use-this': ['off'],
    'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      }
    ]
  }
};
