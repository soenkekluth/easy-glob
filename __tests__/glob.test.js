const glob = require('../src');

describe('test easy-glob', async () => {
  it('should read async', async () => {
    const res = await glob.read('./__tests__/*.js');
    expect(res).toHaveLength(1);
  });

  it('should read async with folder', async () => {
    const res = await glob.read('__tests__');
    expect(res).toHaveLength(1);
  });

  it('should retun a promise', async () => {
    return glob
      .read('./__tests__/*.js')
      .then(result => expect(result).toHaveLength(1))
      .catch(e => console.log('e', e));
  });

  it('should readSync', () => {
    const res = glob.readSync('./__tests__/*.js');
    expect(res).toHaveLength(1);
  });
});
