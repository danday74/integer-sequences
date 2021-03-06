const Big = require('big.js.safe')
const readPrimeSequenceFromFile = require('./helpers/read-prime-sequence-from-file')
const config = require('../../../../config')

const term = (n = 0) => {
  n = Big(n)
  if (n.lt(1) || n.gt(config.LAST_PRIME_SERIES_IDX)) return undefined
  const primes = readPrimeSequenceFromFile(n)
  const prime = primes[n.minus(1)]
  return Big(prime)
}

module.exports = term
