const Big = require('big.js.safe')
const nthRoot = require('../../../more/helpers/nthRoot')
const isCubeNumber = require('../cube-numbers/is-cube-number')

const isTetrahedronNumberFast = (n = -1) => {
  n = Big(n)
  if (n.lt(0)) return undefined

  n = n.times(6)
  const cubeRoot = nthRoot(n, 3)
  Big.RM = 3
  const cubeRootRounded = cubeRoot.round()
  Big.RM = 1

  n = n.plus(cubeRootRounded)
  return !!isCubeNumber(n)
}

module.exports = isTetrahedronNumberFast
