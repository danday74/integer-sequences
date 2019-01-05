const Big = require('big.js.safe')

const cube = require('../sequences/standard/cube-numbers')
const fibonacci = require('../sequences/standard/fibonacci-numbers')
const padovan = require('../sequences/standard/padovan-numbers')
const isPrimeNumber = require('../sequences/irregular/prime-numbers/is-prime-number')
const isSquareNumber = require('../sequences/standard/square-numbers/is-square-number')
const isTetrahedronNumber = require('../sequences/standard/tetrahedron-numbers/is-tetrahedron-number')
const isTriangleNumber = require('../sequences/standard/triangle-numbers/is-triangle-number')

const getNumberAsJson = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined

  return {
    number: Big(n),
    cube: cube.isTerm(n),
    fibonacci: fibonacci.isTerm(n),
    padovan: padovan.isTerm(n),
    prime: isPrimeNumber(n),
    square: isSquareNumber(n),
    tetrahedron: isTetrahedronNumber(n),
    triangle: isTriangleNumber(n)
  }
}

module.exports = getNumberAsJson
