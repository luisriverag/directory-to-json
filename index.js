
const debug   = require('debug')('directory-to-json')
const dto     = require('directory-to-object')
const assert  = require('assert')
const path    = require('path')
const fs      = require('fs')

module.exports = createIndex

// Create directory index file.
// @param {String} opts
// @param {String} dest
// @param {Function} cb
function createIndex(opts, dest, cb) {

  opts = 'string' == typeof opts
    ? {path: opts}
    : opts

  assert.equal(typeof opts, 'object')
  assert.equal(typeof dest, 'string')
  assert.equal(typeof cb, 'function')

  debug(opts, dest)

  readDir(opts, function(err, res) {
    debug(err, res)
    if (err) return cb(err)
    writeFile(dest, res, cb)
  })
}

// Read file from `src`.
// @param {String} opts
// @param {function} cb
function readDir(opts, cb) {
  assert.equal(typeof opts, 'object')
  assert.equal(typeof opts.path, 'string')
  assert.equal(typeof cb, 'function')
  dto(opts, cb)
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
