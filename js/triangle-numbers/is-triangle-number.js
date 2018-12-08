const isTriangleNumber = (n = 0) => {
  if (n < 1) return undefined
  const x = (Math.sqrt(8 * n + 1) - 1) / 2
  return Number.isInteger(x) ? x : false
}

module.exports = isTriangleNumber
