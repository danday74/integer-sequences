const Big = require('big.js.safe')
const isPrime = require('is-prime')
const sequenceMax = require('./sequence-max')
const config = require('../../../../config')

const isTerm = (n = 0) => {
  n = Big(n)
  if (n.lt(1)) return undefined
  const num = parseInt(n.toFixed())
  if (n.lte(config.LAST_PRIME)) {
    const primes = sequenceMax(n)
    const idx = primes.indexOf(num) + 1
    return idx ? Big(idx) : false
  }
  return isPrime(num)
}

module.exports = isTerm
