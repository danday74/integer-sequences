const Big = require('big.js.safe')
const isPrime = require('is-prime')
const getPrimeNumbers = require('./get-prime-numbers')
const config = require('../../../config')

const isPrimeNumber = (n = 0) => {
  n = Big(n)
  if (n.lt(1)) return undefined
  const num = parseInt(n.toFixed())
  if (n.lte(config.LAST_PRIME)) {
    const primes = getPrimeNumbers(n)
    const idx = primes.indexOf(num) + 1
    return idx ? Big(idx) : false
  }
  return isPrime(num)
}

module.exports = isPrimeNumber
