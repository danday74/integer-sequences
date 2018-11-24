const getSquareNumbers = max => {

  const numbers = []

  for (let i = 1; ; i++) {
    const squareNumber = i * i
    if (squareNumber <= max) {
      numbers.push(squareNumber)
    } else {
      break
    }
  }

  return numbers
}

module.exports = getSquareNumbers
