const Big = require('big.js')
const readNthPrimeNumberFromFile = require('./read-nth-prime-number-from-file')
const config = require('../../config')

const getNthPrimeNumber = (n = 0) => {
  n = Big(n)
  if (n.lt(1) || n.gt(config.LAST_PRIME_SERIES_IDX)) return undefined
  const primes = readNthPrimeNumberFromFile(n)
  const prime = primes[n.minus(1)]
  return Big(prime)
}

module.exports = getNthPrimeNumber
