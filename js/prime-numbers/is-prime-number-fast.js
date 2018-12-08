const isPrime = require('is-prime')

const isPrimeNumberFast = n => {
  return n < 1 ? undefined : isPrime(n)
}

module.exports = isPrimeNumberFast
