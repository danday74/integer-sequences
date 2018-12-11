const assert = require('assert')
const isPrime = require('is-prime')
const config = require('./config')
const main = require('.')

console.log('is-prime test running')

// https://primes.utm.edu/lists/small/millions

assert.equal(isPrime(982451607), false)
assert.equal(isPrime(982451609), true)
assert.equal(isPrime(982451611), false)

assert.equal(isPrime(982451627), false)
assert.equal(isPrime(982451629), true)
assert.equal(isPrime(982451631), false)

assert.equal(isPrime(982451651), false)
assert.equal(isPrime(982451653), true)
assert.equal(isPrime(982451657), false)

// http://www.primos.mat.br/2T_en.html

assert.equal(isPrime(47055833441), false)
assert.equal(isPrime(47055833443), true)
assert.equal(isPrime(47055833447), false)

assert.equal(isPrime(47055833451), false)
assert.equal(isPrime(47055833453), true)
assert.equal(isPrime(47055833457), false)

assert.equal(isPrime(47055833457), false)
assert.equal(isPrime(47055833459), true)
assert.equal(isPrime(47055833461), false)

// main

console.time('loading primes')
const numbers = main.getNumbersAsJson(config.LAST_PRIME)
console.timeEnd('loading primes')

let trueCount = 0
let falseCount = 0

console.time('is-prime')
numbers.forEach(num => {
  const number = num.number
  const isP1 = !!num.prime
  const isP2 = isPrime(number)
  if (isP1 !== isP2) throw new Error(`failed at number=${number}, isPrime1=${isP1}, isPrime2=${isP2}`)
  if (isP1 === true) trueCount++
  if (isP1 === false) falseCount++
})
console.timeEnd('is-prime')

assert.equal(trueCount, config.LAST_PRIME_SERIES_IDX)
assert.equal(trueCount + falseCount, config.LAST_PRIME)

console.log('checked', numbers.length, 'numbers')
