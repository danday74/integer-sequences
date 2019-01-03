const Big = require('big.js.safe')

const isCubeNumber = require('../sequences/sequences-standard/cube-numbers/is-cube-number')
const isFibonacciNumber = require('../sequences/sequences-standard/fibonacci-numbers/is-fibonacci-number')
const isPadovanNumber = require('../sequences/sequences-standard/padovan-numbers/is-padovan-number')
const isPrimeNumber = require('../sequences/sequences-other/prime-numbers/is-prime-number')
const isSquareNumber = require('../sequences/sequences-standard/square-numbers/is-square-number')
const isTriangleNumber = require('../sequences/sequences-standard/triangle-numbers/is-triangle-number')

const getNumberAsJson = (n = -1) => {

  n = Big(n)
  if (n.lt(0)) return undefined

  return {
    number: Big(n),
    cube: isCubeNumber(n),
    fibonacci: isFibonacciNumber(n),
    padovan: isPadovanNumber(n),
    prime: isPrimeNumber(n),
    square: isSquareNumber(n),
    triangle: isTriangleNumber(n)
  }
}

module.exports = getNumberAsJson
