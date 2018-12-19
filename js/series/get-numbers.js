const Big = require('big.js')

const getNumbers = (numberFunc, max = 0) => {

  max = Big(max)
  const numbers = []

  for (let i = 1; ; i++) {
    const triangleNumber = numberFunc(i)
    if (triangleNumber.lte(max)) {
      numbers.push(triangleNumber)
    } else {
      break
    }
  }

  return numbers
}

module.exports = getNumbers
