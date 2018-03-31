const create = name => {
  try {
    return require('./' + name + '.adapter');
  } catch (e) {
    return require('./fast-glob.adapter');
  }
  // switch (name) {
  //   case 'glob-fs':
  //     return require('./glob-fs');
  //   case 'fast-glob':
  //   default:
  //     return require('./fast-glob');
  // }
};

module.exports = create;
