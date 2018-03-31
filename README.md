[![Build Status](https://travis-ci.org/soenkekluth/easy-glob.svg?branch=master)](https://travis-ci.org/soenkekluth/easy-glob)

# easy-glob

simple and easy to use glob with instant results using fast-glob as backend and is faster than node-glob.

## Usage

### Node

```js
const glob = require('easy-glob');

// async / await
const res = await glob.read('./*.js');
console.log(res); // ['file1.js', 'file2.js']

// sync
const syncRes = glob.readSync('./*.js');
console.log(syncRes); // ['file1.js', 'file2.js']

// promise
glob.read('./*.js')
  .then(result => console.log(result)) // ['file1.js', 'file2.js']
```

### CLI

```bash
$ glob read <pattern> [options]
$ glob readSync <pattern> [options]

# Examples
$ glob read "./*"
$ glob read "./**/*.js, src/"
$ glob readSync "./*"
$ glob readSync "./**/*.js, src/"
```
