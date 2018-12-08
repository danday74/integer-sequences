const readPrimeNumbersFromFile = require('./read-prime-numbers-from-file')
const config = require('../../config')

const readNthPrimeNumberFromFile = n => {
  const fileNumber = Math.ceil(n / 1000000)
  const lastPrimeInFile = config.LAST_PRIME_PER_FILE[fileNumber]
  return readPrimeNumbersFromFile(lastPrimeInFile)
}

module.exports = readNthPrimeNumberFromFile
