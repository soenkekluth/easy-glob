const { filter, parse } = require('../utils');
const defaults = require('../defaults');

class Glob {
  constructor(glob, props = {}) {
    this.props = Object.assign({}, defaults, props);
    this.glob = glob;

    let entries = parse(this.glob, true);

    if (this.props.exclude.map) {
      entries = entries.concat(this.props.exclude.map(e => '!' + e));
    }
    const filtered = filter(entries);

    this.data = {
      entries: entries,
      include: filtered.include,
      exclude: filtered.exclude,
    };
  }

  get entries() {
    return this.data.entries;
  }
  get include() {
    return this.data.include;
  }
  get exclude() {
    return this.data.exclude;
  }
}

module.exports = Glob;
