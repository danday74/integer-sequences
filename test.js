const _ = require('lodash')
const assert = require('assert')
const config = require('./config')
const getPrimeNumberAsJsonForTesting = require('./js/numbers-as-json/get-prime-numbers-as-json-for-testing')
const intseqs = require('.')

let json
let number

const test = (testName, expected) => {
  console.time(testName)
  json = getPrimeNumberAsJsonForTesting(expected.number)
  number = _.last(json)
  assert.deepEqual(number, expected)
  assert.equal(number.number, json.length)
  console.timeEnd(testName)
}

console.log('tests running')

console.log()

console.time('get numbers as json')
intseqs.getNumbersAsJson(1000000)
console.timeEnd('get numbers as json')

console.time('get numbers as json')
intseqs.getNumbersAsJson(1000000)
console.timeEnd('get numbers as json')

console.log()

console.time('prime.sequenceMax 100m')
intseqs.prime.sequenceMax(100000000)
console.timeEnd('prime.sequenceMax 100m')

console.time('prime.sequenceMax 100m')
intseqs.prime.sequenceMax(100000000)
console.timeEnd('prime.sequenceMax 100m')

console.log()

test('last prime minus 1', {number: config.LAST_PRIME - 1, prime: false})

test('last prime', {number: config.LAST_PRIME, prime: config.LAST_PRIME_SERIES_IDX})

test('last prime plus 1', {number: config.LAST_PRIME + 1, prime: null})

test('five', {number: 5, prime: 3})

test('six', {number: 6, prime: false})
