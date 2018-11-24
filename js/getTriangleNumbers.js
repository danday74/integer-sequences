const getTriangleNumbers = max => {

  const triangleNumbers = []

  for (let i = 1; ; i++) {
    const triangleNumber = i * (i + 1) / 2
    if (triangleNumber <= max) {
      triangleNumbers.push(triangleNumber)
    } else {
      break
    }
  }

  return triangleNumbers
}

module.exports = getTriangleNumbers
