const getSquareNumbers = max => {

  const squareNumbers = []

  for (let i = 1; ; i++) {
    const squareNumber = i * i
    if (squareNumber <= max) {
      squareNumbers.push(squareNumber)
    } else {
      break
    }
  }

  return squareNumbers
}

module.exports = getSquareNumbers
