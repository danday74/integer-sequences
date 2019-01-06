const Big = require('big.js.safe')
const readPrimeSequenceMaxFromFile = require('./read-prime-sequence-max-from-file')
const config = require('../../../../../config')

const readPrimeSequenceFromFile = n => {

  if (n == null) return readPrimeSequenceMaxFromFile()

  Big.RM = 3
  const fileNumber = n.div(1000000).round()
  Big.RM = 1

  const lastPrimeInFile = config.LAST_PRIME_PER_FILE[fileNumber]
  if (lastPrimeInFile) {
    return readPrimeSequenceMaxFromFile(Big(lastPrimeInFile))
  } else {
    throw RangeError(`Largest prime index supported is ${config.LAST_PRIME_SERIES_IDX} but ${n.toFixed()} was requested`)
  }
}

module.exports = readPrimeSequenceFromFile
