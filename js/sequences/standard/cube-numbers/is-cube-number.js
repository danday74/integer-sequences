// see https://stackoverflow.com/questions/53878669/find-cube-root-using-limited-math-operators

const Big = require('big.js.safe')

const ZERO = Big(0)
const TEN = new Big(10)

const isZero = v => {
  let digits = v.c
  return digits.length === 1 && digits[0] === 0
}

const isInteger = v => {
  /* istanbul ignore if */
  if (isZero(v)) return true
  return v.c.length <= v.e + 1
}

/* istanbul ignore next */
const neg = v => {
  return new ZERO.minus(v)
}

const cubeRoot = v => {

  let c0 = v.cmp(ZERO)
  /* istanbul ignore if */
  if (c0 === 0) return ZERO
  /* istanbul ignore if */
  if (c0 < 0) {
    let abs3 = cubeRoot(v.abs())
    if (abs3 instanceof Big) return neg(abs3)
    else return abs3
  }

  /* istanbul ignore if */
  if (!isInteger(v)) return false

  // use 10 because it should be fast given the way the value is stored inside Big
  let left = TEN.pow(Math.floor(v.e / 3))
  if (left.pow(3).eq(v)) return left

  let right = left.times(TEN)

  while (true) { // eslint-disable-line no-constant-condition
    let middle = left.plus(right).div(2)
    if (!isInteger(middle)) middle = middle.round(0, 0) // round down
    if (middle.eq(left)) return false
    let m3 = middle.pow(3)
    let cmp = m3.cmp(v)
    if (cmp === 0) return middle
    if (cmp < 0) left = middle
    else right = middle
  }
}

const isCubeNumber = (n = -1) => {
  n = Big(n)
  if (n.lt(0)) return undefined
  return cubeRoot(n)
}

module.exports = isCubeNumber
