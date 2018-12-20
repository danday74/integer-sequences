const _ = require('lodash')
const assert = require('assert')
const config = require('./config')
const getPrimeNumbers = require('./js/prime-numbers/get-prime-numbers')
const getPrimeNumberAsJsonForTesting = require('./js/numbers-as-json/get-prime-numbers-as-json-for-testing')

let json
let number

console.log('tests running')

const test = (testName, expected) => {
  console.time(testName)
  json = getPrimeNumberAsJsonForTesting(expected.number)
  number = _.last(json)
  assert.deepEqual(number, expected)
  assert.equal(number.number, json.length)
  console.timeEnd(testName)
}

console.time('get primes 100000000')
getPrimeNumbers(100000000)
console.timeEnd('get primes 100000000')

console.time('get primes 100000000')
getPrimeNumbers(100000000)
console.timeEnd('get primes 100000000')

test('last prime minus 1', {number: config.LAST_PRIME - 1, prime: false})

test('last prime', {number: config.LAST_PRIME, prime: config.LAST_PRIME_SERIES_IDX})

test('last prime plus 1', {number: config.LAST_PRIME + 1, prime: null})

test('five', {number: 5, prime: 3})

test('six', {number: 6, prime: false})
