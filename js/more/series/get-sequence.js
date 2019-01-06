const Big = require('big.js.safe')

const getSequence = (numberFunc, n = 0) => {

  n = Big(n)
  if (n.lt(0)) return undefined
  const numbers = []

  for (let i = 1; i <= n; i++) {
    const number = numberFunc(i)
    numbers.push(number)
  }

  return numbers
}

module.exports = getSequence
