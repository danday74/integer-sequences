const Big = require('big.js.safe')

const isTetrahedronNumber = (n = -1) => {
  n = Big(n)
  if (n.lt(0)) return undefined
  // TODO
  return n
}

module.exports = isTetrahedronNumber
