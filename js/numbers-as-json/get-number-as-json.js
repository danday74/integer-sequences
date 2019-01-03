const Big = require('big.js.safe')

const isCubeNumber = require('../cube-numbers/is-cube-number')
const isFibonacciNumber = require('../fibonacci-numbers/is-fibonacci-number')
const isPadovanNumber = require('../padovan-numbers/is-padovan-number')
const isPrimeNumber = require('../prime-numbers/is-prime-number')
const isSquareNumber = require('../square-numbers/is-square-number')
const isTriangleNumber = require('../triangle-numbers/is-triangle-number')

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
