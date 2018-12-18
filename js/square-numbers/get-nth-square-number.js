const Big = require('big.js')

const getNthSquareNumber = (n = 0) => {
  n = Big(n)
  return n.lt(1) ? undefined : n.pow(2)
}

module.exports = getNthSquareNumber
