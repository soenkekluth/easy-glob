#!/usr/bin/env node
const sade = require('sade');
const { basename } = require('path');
const { version } = require('../package.json');

const name = basename(process.argv[1]);
const program = sade(name);

const glob = require('./index');

program.version(version).option('--format, -f', 'output format');

program
  .command('read <pattern>', 'read filesystem async with glob pattern', { default: true })
  .example('read "./*"')
  .example('read "./**/*.js, "src/"')
  .action(async (pattern, options) => {
    const result = await glob.read(pattern);
    process.stdout.write(result.join('\n'));
  });

program
  .command('readSync <pattern>', 'read filesystem sync with glob pattern')
  .example('read "./*"')
  .example('read "./**/*.js, "src/"')
  .action((pattern, options) => {
    const result = glob.readSync(pattern);
    process.stdout.write(result.join('\n'));
  });

program.parse(process.argv);
