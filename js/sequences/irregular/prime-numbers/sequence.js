const Big = require('big.js.safe')
const readPrimeSequenceFromFile = require('./helpers/read-prime-sequence-from-file')

const sequence = n => {

  if (n != null) {
    n = Big(n)
    if (n.lt(1)) return []
  }
  const primes = readPrimeSequenceFromFile(n)
  return primes.slice(0, n)
}

module.exports = sequence
