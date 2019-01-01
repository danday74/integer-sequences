const Big = require('big.js.safe')

const getNumbers = (numberFunc, max = 0) => {

  max = Big(max)
  if (max.lt(0)) return undefined
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
