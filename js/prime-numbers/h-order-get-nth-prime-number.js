const config = require('../../config')
const getPrimeNumbers = require('./get-prime-numbers')

const getNthPrimeNumber = (n = 0) => {
  if (n < 1 || n > config.LAST_PRIME_SERIES_IDX) return undefined
  const primes = getPrimeNumbers()
  return primes[n - 1]
}

module.exports = getNthPrimeNumber
