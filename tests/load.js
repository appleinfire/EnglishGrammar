// Loads the app's logic (no screens) into Node for the tests: config, helpers, store, content, engine.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const mem = {};
globalThis.localStorage = { getItem: (k) => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); }, removeItem: (k) => { delete mem[k]; } };
for (const f of ['config', 'util', 'schema', 'store', 'check', 'content']) require(path.join(root, 'js', f + '.js'));
for (const m of fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script src="(js\/topics\/[^"]+)"/g)) require(path.join(root, m[1]));
for (const f of ['srs', 'level', 'report', 'i18n', 'exercises']) require(path.join(root, 'js', f + '.js'));
module.exports = globalThis.APP;
