const _ = require('lodash')
const readPrimeNumbersFromFile = require('./read-prime-numbers-from-file')

const getPrimeNumbers = max => {

  if (max != null && max < 2) return []

  const primes = readPrimeNumbersFromFile(max)

  let idx = _.sortedIndex(primes, max)
  if (primes[idx] !== max) idx -= 1
  return primes.slice(0, idx + 1)
}

module.exports = getPrimeNumbers
