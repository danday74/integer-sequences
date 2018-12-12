const getNthTriangleNumber = require('./get-nth-triangle-number')

const getNTriangleNumbers = (n = 0) => {

  const numbers = []

  for (let i = 1; i <= n; i++) {
    const triangleNumber = getNthTriangleNumber(i)
    numbers.push(triangleNumber)
  }

  return numbers
}

module.exports = getNTriangleNumbers
