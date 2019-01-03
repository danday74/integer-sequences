const Big = require('big.js.safe')
const isSquareNumber = require('../square-numbers/is-square-number')

const isFibonacciNumberFast = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined

  const num = n.pow(2).times(5)
  const hi = num.plus(4)
  const lo = num.minus(4)
  return isSquareNumber(hi) !== false || isSquareNumber(lo) !== false
}

module.exports = isFibonacciNumberFast
