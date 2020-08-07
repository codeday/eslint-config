#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

const rootPath = path.dirname(require.main.filename || process.mainModule.filename);

const eslintrc = `module.exports = {
  extends: '@codeday',
};
`;

const eslintignore = `node_modules/
dist/
build/
.next/
.git/
`;

fs.writeFileSync(path.join(rootPath, '.eslintrc'), eslintrc);
fs.writeFileSync(path.join(rootPath, '.eslintignore'), eslintignore);
