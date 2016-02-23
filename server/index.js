'use strict'

const fs = require('fs')
const babelrc = fs.readFileSync('./.babelrc')

let config = {}
try {
  config = JSON.parse(babelrc)
} catch (err) {
  console.error('Error parsing .babelrc')
  console.error(err)
}

require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
})
require('babel-core/register')(config)
require('babel-polyfill')
require('./server')
