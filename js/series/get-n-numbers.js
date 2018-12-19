const Big = require('big.js')

const getNNumbers = (numberFunc, n = 0) => {

  n = Big(n)
  const numbers = []

  for (let i = 1; i <= n; i++) {
    const number = numberFunc(i)
    numbers.push(number)
  }

  return numbers
}

module.exports = getNNumbers
