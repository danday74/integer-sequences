const Big = require('big.js.safe')

const getNthPadovanNumber = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined
  if (n.lt(3)) return Big(1)

  let x = Big(1)
  let y = Big(1)
  let z = Big(1)
  let curr = x.plus(y)

  for (let i = 3; i < n; i++) {
    // noinspection JSSuspiciousNameCombination
    x = y
    y = z
    z = curr
    curr = x.plus(y)
  }

  return curr
}

module.exports = getNthPadovanNumber
