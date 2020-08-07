#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

const rootPath = process.cwd();

const eslintrc = `module.exports = {
  extends: './node_modules/@codeday/eslint-typescript-config',
};
`;

const eslintignore = `node_modules/
dist/
build/
.next/
.git/
`;

fs.writeFileSync(path.join(rootPath, '.eslintrc.js'), eslintrc);
fs.writeFileSync(path.join(rootPath, '.eslintignore'), eslintignore);
