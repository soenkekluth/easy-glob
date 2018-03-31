const fg = require('fast-glob');

const read = async glob =>
  fg
    .async(glob.entries)
    .then(res => res)
    .catch(e => {
      throw e;
    });

const readSync = glob => {
  return fg.sync(glob.entries);
};
module.exports = {
  read: read,
  readSync: readSync,
};
