const Big = require('big.js.safe')

const term = (n = -1) => {
  n = Big(n)
  return n.lt(0) ? undefined : n.pow(2)
}

module.exports = term
