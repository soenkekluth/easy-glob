const fg = require('fast-glob');

const read = async glob =>
  new Promise((resolve, reject) => {
    fg
      .async(glob.entries)
      .then(res => {
        resolve(res);
      })
      .catch(e => {
        console.error(e);
        reject(e);
      });
  });

const readSync = glob => {
  return fg.sync(glob.entries);
};
module.exports = {
  read: read,
  readSync: readSync,
};
