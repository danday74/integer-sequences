const Big = require('big.js.safe')

const cube = require('../sequences/standard/cube-numbers')
const fibonacci = require('../sequences/standard/fibonacci-numbers')
const padovan = require('../sequences/standard/padovan-numbers')
const prime = require('../sequences/irregular/prime-numbers')
const square = require('../sequences/standard/square-numbers')
const tetrahedron = require('../sequences/standard/tetrahedron-numbers')
const triangle = require('../sequences/standard/triangle-numbers')

const getNumberAsJson = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined

  return {
    number: Big(n),
    cube: cube.isTerm(n),
    fibonacci: fibonacci.isTerm(n),
    padovan: padovan.isTerm(n),
    prime: prime.isTerm(n),
    square: square.isTerm(n),
    tetrahedron: tetrahedron.isTerm(n),
    triangle: triangle.isTerm(n)
  }
}

module.exports = getNumberAsJson
