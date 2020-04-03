module.exports = {
  plugins: [ 'jsdoc', 'sonarjs', 'no-secrets'],
  extends: [ 'airbnb', 'plugin:jsdoc/recommended', 'plugin:sonarjs/recommended'],
  settings: {
    jsdoc: {
      ignorePrivate: true,
    },
    tagNamePreference: {
      'augments': 'extends',
    }
  },
  rules: {
    'no-secrets/no-secrets': ['error'],
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'max-len': ['error', 120],
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.ts'] }],
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
    ],

    'node/no-deprecated-api': ['error'],
    'node/no-extraneous-import': ['error'],
    'node/no-extraneous-require': ['error'],
    'node/no-exports-assign': ['error'],
    'node/no-missing-import': ['error'],
    'node/no-missing-require': ['error'],
    'node/no-unpublished-bin': ['error'],
    'node/no-unpublished-import': ['error'],
    'node/no-unpublished-require': ['error'],
    'node/process-exit-as-throw': ['error'],
    'node/shebang': ['error'],

    'jsdoc/check-examples': ['error', { paddedIndent: 2 }],

    // Fix for broken autofix in jsdoc
    'jsdoc/require-jsdoc': [0],
    'require-jsdoc': [1, {require: {
      ArrowFunctionExpression: true,
      FunctionExpression: true,
      MethodDefinition: true,
    }}],
  }
};
