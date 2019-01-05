const Big = require('big.js.safe')
const nthRoot = require('../../../more/helpers/nthRoot')
const cube = require('../cube-numbers')

const isTetrahedronNumber = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined
  if (n.eq(0)) return Big(0)

  n = n.times(6)
  const cubeRoot = nthRoot(n, 3)
  Big.RM = 3
  const cubeRootRounded = cubeRoot.round()
  Big.RM = 1

  n = n.plus(cubeRootRounded)
  const cubeIdx = cube.isTerm(n)
  return cubeIdx ? cubeIdx.minus(1) : false
}

module.exports = isTetrahedronNumber
