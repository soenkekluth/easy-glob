const { statSync } = require('fs');
const { resolve } = require('path');
const isGlob = require('is-glob');

const regex = /,?[\s]+/g;

const isDir = path => {
  try {
    return statSync(resolve(path)).isDirectory();
  } catch (err) {
    return false;
  }
};

const isFile = path => {
  try {
    return statSync(path).isFile();
  } catch (err) {
    return false;
  }
};

// const appendWildcard = q => {
//   let nq = q;
//   nq = q.charAt(q.length - 1).match(/[^*]/) ? q + '*' : q;
//   return nq;
// };

const appendSlash = q => {
  let nq = q;
  if (isDir(nq)) {
    nq = q.charAt(q.length - 1).match(/[^/]/) ? q + '/*' : q;
  }
  return nq;
};

const parse = (pattern, { slash = true }) => {
  const res = pattern.split(regex);
  if (slash) {
    return res.map(i => appendSlash(i));
  }
  return res;
};

const filter = entries => {
  const result = {
    include: [],
    exclude: [],
  };
  for (let i = 0, l = entries.length; i < l; i++) {
    const e = entries[i];
    (e.indexOf('!') === 0 && result.exclude.push(e.substr(1))) || result.include.push(e);
  }
  return result;
};

module.exports = {
  isDir,
  isFile,
  isGlob,
  appendSlash,
  regex,
  parse,
  filter,
};
//.map(entry => appendWildcard(entry))
