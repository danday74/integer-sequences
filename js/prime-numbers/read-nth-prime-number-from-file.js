const readPrimeNumbersFromFile = require('./read-prime-numbers-from-file')

const lastPrimesPerFile = {
  1: 15485863,
  2: 32452843,
  3: 49979687,
  4: 67867967,
  5: 86028121,
  6: 104395301
}

const readNthPrimeNumberFromFile = n => {
  const fileNumber = Math.ceil(n / 1000000)
  const lastPrimeInFile = lastPrimesPerFile[fileNumber]
  return readPrimeNumbersFromFile(lastPrimeInFile)
}

module.exports = readNthPrimeNumberFromFile
