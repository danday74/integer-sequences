const Big = require('big.js')

const isSquareNumber = (n = 0) => {
  n = Big(n)
  if (n.lt(1)) return undefined
  const sqrt = n.sqrt()
  const intSqrt = sqrt.round()
  return sqrt.eq(intSqrt) ? intSqrt : false
}

module.exports = isSquareNumber
