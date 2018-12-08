const isPrime = require('is-prime')

const isPrimeNumberFast = (n = 0) => {
  return n < 1 ? undefined : isPrime(n)
}

module.exports = isPrimeNumberFast
