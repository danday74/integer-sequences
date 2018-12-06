const getNthTriangleNumber = require('./get-nth-triangle-number')

const getTriangleNumbers = max => {

  const numbers = []

  for (let i = 1; ; i++) {
    const triangleNumber = getNthTriangleNumber(i)
    if (triangleNumber <= max) {
      numbers.push(triangleNumber)
    } else {
      break
    }
  }

  return numbers
}

module.exports = getTriangleNumbers
