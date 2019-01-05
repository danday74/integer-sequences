const Big = require('big.js.safe')

const isTerm = (n = -1) => {
  n = Big(n)
  if (n.lt(0)) return undefined
  // (Math.sqrt(8 * n + 1) - 1) / 2
  const x = n.times(8).plus(1).sqrt().minus(1).div(2)
  const intX = x.round()
  return x.eq(intX) ? intX : false
}

module.exports = isTerm
