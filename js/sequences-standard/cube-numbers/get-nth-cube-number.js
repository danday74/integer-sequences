const Big = require('big.js.safe')

const getNthCubeNumber = (n = -1) => {
  n = Big(n)
  return n.lt(0) ? undefined : n.pow(3)
}

module.exports = getNthCubeNumber