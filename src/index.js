const Glob = require("./model/glob");
const create = require("./adapter/create");

class EasyGlob {
  constructor(id) {
    this.engine = create(id);
  }

  async read(pattern, opts = {}) {
    const glob = new Glob(pattern, opts);
    const entries = await this.engine.read(glob);
    if (entries) {
      return entries;
    }
    return [];
  }

  readSync(pattern, opts = {}) {
    const glob = new Glob(pattern, opts);
    return this.engine.readSync(glob);
  }
}

const glob = new EasyGlob("fast-glob");

module.exports = glob;
module.exports.EasyGlob = EasyGlob;
