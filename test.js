const _ = require('lodash')
const assert = require('assert')
const main = require('./index')
const config = require('./config')

let json
let number

const test = (testName, expected) => {
  console.log('tests running')
  console.time(testName)
  json = main.getNumbersAsJson(parseInt(expected.number))
  number = _.last(json)
  assert.deepEqual(number, expected)
  assert.equal(number.number, json.length)
  console.timeEnd(testName)
}

test('last prime minus 1', {number: config.LAST_PRIME - 1, prime: false, triangle: false, square: false})

test('last prime', {number: config.LAST_PRIME, prime: config.LAST_PRIME_SERIES_IDX, triangle: false, square: false})

test('last prime plus 1', {number: config.LAST_PRIME + 1, prime: null, triangle: false, square: false})

test('six', {number: 6, prime: false, triangle: 3, square: false})
