const Big = require('big.js')

const getNthFibonacciNumber = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined
  if (n.lt(2)) return n

  let x = Big(0)
  let y = Big(1)

  for (let i = 1; i < n; i++) {
    const temp = y
    y = temp.plus(x)
    x = temp
  }

  return y
}

module.exports = getNthFibonacciNumber
