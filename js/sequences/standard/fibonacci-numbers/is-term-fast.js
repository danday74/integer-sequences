const Big = require('big.js.safe')
const square = require('../square-numbers')

const isTermFast = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined

  const num = n.pow(2).times(5)
  const hi = num.plus(4)
  const lo = num.minus(4)
  return square.isTerm(hi) !== false || square.isTerm(lo) !== false
}

module.exports = isTermFast
