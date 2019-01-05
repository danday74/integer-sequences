const Big = require('big.js.safe')

const term = (n = -1) => {
  n = Big(n)
  // n * (n + 1) * (n + 2) / 6
  return n.lt(0) ? undefined : n.times(n.plus(1)).times(n.plus(2)).div(6)
}

module.exports = term
