
const debug   = require('debug')('directory-to-json')
const dto     = require('directory-to-object')
const assert  = require('assert')
const path    = require('path')
const fs      = require('fs')

module.exports = createIndex

// Create directory index file.
// @param {String} src
// @param {String} dest
// @param {Function} cb
function createIndex(src, dest, cb) {
  assert.equal(typeof src, 'string')
  assert.equal(typeof dest, 'string')
  assert.equal(typeof cb, 'function')

  debug(src, dest)

  readDir(src, function(err, res) {
    debug(err, res)
    if (err) return cb(err)
    writeFile(dest, res, cb)
  })
}

// Read file from `src`.
// @param {String} dest
// @param {function} cb
function readDir(src, cb) {
  dto(path.resolve(src), cb)
}

// Write file to `dest`.
// @param {String} dest
// @param {String} file
// @param {function} cb
function writeFile(dest, file, cb) {
  const ws = fs.createWriteStream(dest)
  ws.once('open', function() {
    this.write(JSON.stringify(file))
    this.end()
    cb()
  })
}
