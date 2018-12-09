const Big = require('big.js')
const isPrime = require('is-prime')

const isPrimeNumberFast = (n = 0) => {
  n = Big(n)
  const num = parseInt(n.toFixed())
  return n < 1 ? undefined : isPrime(num)
}

module.exports = isPrimeNumberFast
