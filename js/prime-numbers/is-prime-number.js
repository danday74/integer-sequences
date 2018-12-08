const isPrime = require('is-prime')
const getPrimeNumbers = require('./get-prime-numbers')
const config = require('../../config')

const isPrimeNumber = (n = 0) => {
  if (n < 1) return undefined
  if (n <= config.LAST_PRIME) {
    const primes = getPrimeNumbers(n)
    const idx = primes.indexOf(n) + 1
    return idx ? idx : false
  }
  return isPrime(n)
}

module.exports = isPrimeNumber
