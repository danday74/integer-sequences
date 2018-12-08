const readNthPrimeNumberFromFile = require('./read-nth-prime-number-from-file')
const config = require('../../config')

const getNthPrimeNumber = (n = 0) => {
  if (n < 1 || n > config.LAST_PRIME_SERIES_IDX) return undefined
  const primes = readNthPrimeNumberFromFile(n)
  return primes[n - 1]
}

module.exports = getNthPrimeNumber
