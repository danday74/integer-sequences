const Big = require('big.js')

const getNthSquareNumber = (n = -1) => {
  n = Big(n)
  return n.lt(0) ? undefined : n.pow(2)
}

module.exports = getNthSquareNumber
