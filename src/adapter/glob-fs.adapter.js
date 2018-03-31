const engine = require('glob-fs')();
// const engine = require('glob-fs')();

// const exclude = (pattern) => {
//   .exclude(/\.foo$/)
//   .exclude('*.bar')
//   .exclude('*.baz');
// }

const init = glob => {
  if (glob.exclude) {
    glob.exclude.forEach(entry => {
      engine.exclude(entry);
    });
  }
};

const read = async glob => {
  init(glob);
  return engine.readdirPromise(glob.include.join(' '));
};

const readSync = glob => {
  // init(glob);
  // console.log('######### glob.entries', '|' + glob.include.join(' ') + '|');

  // return engine.readdirSync(glob.include.join(' '));
  return engine.readdirSync(glob.include.join(' '));
};

module.exports = {
  read: read,
  readSync: readSync,
};
