const Big = require('big.js')
const getNthSquareNumber = require('./get-nth-square-number')

const getSquareNumbers = (max = 0) => {

  max = Big(max)

  const numbers = []

  for (let i = 1; ; i++) {
    const squareNumber = getNthSquareNumber(i)
    if (squareNumber.lte(max)) {
      numbers.push(squareNumber)
    } else {
      break
    }
  }

  return numbers
}

module.exports = getSquareNumbers
