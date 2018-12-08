const getNthSquareNumber = require('./get-nth-square-number')

const getSquareNumbers = (max = 0) => {

  const numbers = []

  for (let i = 1; ; i++) {
    const squareNumber = getNthSquareNumber(i)
    if (squareNumber <= max) {
      numbers.push(squareNumber)
    } else {
      break
    }
  }

  return numbers
}

module.exports = getSquareNumbers
