const _ = require('lodash')
const Big = require('big.js.safe')
const readPrimeSequenceMaxFromFile = require('./helpers/read-prime-sequence-max-from-file')

const sequenceMax = max => {

  if (max != null) {
    max = Big(max)
    if (max.lt(2)) return []
  }

  const primes = readPrimeSequenceMaxFromFile(max)

  if (max != null) {
    let idx = _.sortedIndex(primes, max)
    if (!max.eq(primes[idx])) idx -= 1
    return primes.slice(0, idx + 1)
  }
  return primes
}

module.exports = sequenceMax
