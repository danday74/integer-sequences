const Big = require('big.js.safe')
const readNPrimeNumbersFromFile = require('./read-n-prime-numbers-from-file')

const getNPrimeNumbers = n => {

  if (n != null) {
    n = Big(n)
    if (n.lt(1)) return []
  }
  const primes = readNPrimeNumbersFromFile(n)
  return primes.slice(0, n)
}

module.exports = getNPrimeNumbers
