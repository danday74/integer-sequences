const Big = require('big.js')
const readPrimeNumbersFromFile = require('./read-prime-numbers-from-file')
const config = require('../../config')

const readNthPrimeNumberFromFile = n => {
  Big.RM = 3
  const fileNumber = n.div(1000000).round()
  Big.RM = 1
  const lastPrimeInFile = Big(config.LAST_PRIME_PER_FILE[fileNumber])
  return readPrimeNumbersFromFile(lastPrimeInFile)
}

module.exports = readNthPrimeNumberFromFile
