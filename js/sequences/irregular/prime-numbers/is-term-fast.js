const Big = require('big.js.safe')
const isPrime = require('is-prime')

const isTermFast = (n = 0) => {
  n = Big(n)
  const num = parseInt(n.toFixed())
  return n.lt(1) ? undefined : isPrime(num)
}

module.exports = isTermFast
