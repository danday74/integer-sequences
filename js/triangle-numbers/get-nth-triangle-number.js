const Big = require('big.js')

const getNthTriangleNumber = (n = 0) => {
  n = Big(n)
  // n * (n + 1) / 2
  return n.lt(1) ? undefined : n.times(n.plus(1)).div(2)
}

module.exports = getNthTriangleNumber
