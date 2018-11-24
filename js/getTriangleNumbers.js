const getTriangleNumbers = max => {

  const numbers = []

  for (let i = 1; ; i++) {
    const triangleNumber = i * (i + 1) / 2
    if (triangleNumber <= max) {
      numbers.push(triangleNumber)
    } else {
      break
    }
  }

  return numbers
}

module.exports = getTriangleNumbers
