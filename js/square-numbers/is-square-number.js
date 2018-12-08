const isSquareNumber = (n = 0) => {
  if (n < 1) return undefined
  const x = Math.sqrt(n)
  return Number.isInteger(x) ? x : false
}

module.exports = isSquareNumber
