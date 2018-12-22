const Big = require('big.js')

const getNthCubeNumber = (n = 0) => {
  n = Big(n)
  return n.lt(1) ? undefined : n.pow(3)
}

module.exports = getNthCubeNumber
