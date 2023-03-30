# `@codeday/eslint-config`

> CodeDay eslint config.

## Usage

**Install**:

```bash
$ yarn add --dev @codeday/eslint-config
```

**Edit `package.json`**:

```jsonc
{
  // ...
  "prettier": "@codeday/prettier-config"
}
```

**Create `.eslintrc.js`**:
```js
module.exports = {
  extends: ['@codeday'],
};

```

**With Next.js (`.eslintrc.js`)**:
```js
module.exports = {
  extends: ['@codeday', 'plugin:@next/next/recommended'],
};

```