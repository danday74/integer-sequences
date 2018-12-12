const getNthSquareNumber = require('./get-nth-square-number')

const getNSquareNumbers = (n = 0) => {

  const numbers = []

  for (let i = 1; i <= n; i++) {
    const squareNumber = getNthSquareNumber(i)
    numbers.push(squareNumber)
  }

  return numbers
}

module.exports = getNSquareNumbers
