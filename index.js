module.exports = {
  extends: 'airbnb',
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
