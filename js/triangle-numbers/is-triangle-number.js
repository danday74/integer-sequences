const isTriangleNumber = n => {
  if (n < 1) return false
  const x = (Math.sqrt(8 * n + 1) - 1) / 2
  return Number.isInteger(x) ? x : false
}

module.exports = isTriangleNumber
