const Big = require('big.js')
const readPrimeNumbersFromFile = require('./read-prime-numbers-from-file')
const config = require('../../config')

const readNPrimeNumbersFromFile = n => {

  if (n == null) return readPrimeNumbersFromFile()

  Big.RM = 3
  const fileNumber = n.div(1000000).round()
  Big.RM = 1

  const lastPrimeInFile = config.LAST_PRIME_PER_FILE[fileNumber]
  if (lastPrimeInFile) {
    return readPrimeNumbersFromFile(Big(lastPrimeInFile))
  } else {
    throw RangeError(`Largest prime index supported is ${config.LAST_PRIME_SERIES_IDX} but ${n.toFixed()} was requested`)
  }
}

module.exports = readNPrimeNumbersFromFile
