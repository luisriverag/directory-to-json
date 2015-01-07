# directory-to-json
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Write a representation of a directory to a `JSON` file.

## Installation
```bash
$ npm install directory-to-json
```

## Usage
```js
const dtj = require('directory-to-json')

dtj('./mydir', './outfile.json', (err) => console.log(err))
```

## Why?
When parsing several directories of files it's nice to _just_ have to
provide a path rather than creating an index object manually. This is useful
for creating static sites out of markdown files. Client-side projects can't call
a read function dynamically however, so a static file must be created.

## See Also
- [directory-to-object][dto]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/directory-to-json.svg?style=flat-square
[npm-url]: https://npmjs.org/package/directory-to-json
[downloads-image]: http://img.shields.io/npm/dm/directory-to-json.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/directory-to-json

[dto]: https://github.com/wercker/directory-to-object
