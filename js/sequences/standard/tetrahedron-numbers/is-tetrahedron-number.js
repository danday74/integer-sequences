const Big = require('big.js.safe')
const nthRoot = require('../../../more/helpers/nthRoot')
const getNthTetrahedronNumber = require('./get-nth-tetrahedron-number')
const isTetrahedronNumberFast = require('./is-tetrahedron-number-fast')

const isTetrahedronNumber = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined

  if (!isTetrahedronNumberFast(n)) return false

  let idx, tet

  idx = nthRoot(n.times(6), 3).round()
  tet = getNthTetrahedronNumber(idx)

  /* istanbul ignore else */
  if (n.lt(tet)) {
    while (n.lt(tet)) {
      idx = idx.minus(1)
      tet = getNthTetrahedronNumber(idx)
    }
  } else if (n.gt(tet)) {
    while (n.gt(tet)) {
      idx = idx.plus(1)
      tet = getNthTetrahedronNumber(idx)
    }
  }

  return (n.eq(tet)) ? idx : /* istanbul ignore next */ false
}

module.exports = isTetrahedronNumber
