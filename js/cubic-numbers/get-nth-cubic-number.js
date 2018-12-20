const Big = require('big.js')

const getNthCubicNumber = (n = 0) => {
  n = Big(n)
  return n.lt(1) ? undefined : n.pow(3)
}

module.exports = getNthCubicNumber
