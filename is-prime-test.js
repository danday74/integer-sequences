const assert = require('assert')
const isPrime = require('is-prime')
const config = require('./config')
const main = require('.')

console.log('is-prime test running')
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
