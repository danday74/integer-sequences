const getNumbersAsJson = require('./js/numbers-as-json/get-numbers-as-json')
const getNumberAsJson = require('./js/numbers-as-json/get-number-as-json')

const getCubeNumbers = require('./js/sequences/sequences-standard/cube-numbers/get-cube-numbers')
const getNCubeNumbers = require('./js/sequences/sequences-standard/cube-numbers/get-n-cube-numbers')
const getNthCubeNumber = require('./js/sequences/sequences-standard/cube-numbers/get-nth-cube-number')
const isCubeNumber = require('./js/sequences/sequences-standard/cube-numbers/is-cube-number')

const getFibonacciNumbers = require('./js/sequences/sequences-standard/fibonacci-numbers/get-fibonacci-numbers')
const getNFibonacciNumbers = require('./js/sequences/sequences-standard/fibonacci-numbers/get-n-fibonacci-numbers')
const getNthFibonacciNumber = require('./js/sequences/sequences-standard/fibonacci-numbers/get-nth-fibonacci-number')
const isFibonacciNumber = require('./js/sequences/sequences-standard/fibonacci-numbers/is-fibonacci-number')
const isFibonacciNumberFast = require('./js/sequences/sequences-standard/fibonacci-numbers/is-fibonacci-number-fast')

const getPadovanNumbers = require('./js/sequences/sequences-standard/padovan-numbers/get-padovan-numbers')
const getNPadovanNumbers = require('./js/sequences/sequences-standard/padovan-numbers/get-n-padovan-numbers')
const getNthPadovanNumber = require('./js/sequences/sequences-standard/padovan-numbers/get-nth-padovan-number')
const isPadovanNumber = require('./js/sequences/sequences-standard/padovan-numbers/is-padovan-number')

const getPrimeNumbers = require('./js/sequences/sequences-other/prime-numbers/get-prime-numbers')
const getNPrimeNumbers = require('./js/sequences/sequences-other/prime-numbers/get-n-prime-numbers')
const getNthPrimeNumber = require('./js/sequences/sequences-other/prime-numbers/get-nth-prime-number')
const isPrimeNumber = require('./js/sequences/sequences-other/prime-numbers/is-prime-number')
const isPrimeNumberFast = require('./js/sequences/sequences-other/prime-numbers/is-prime-number-fast')

const getSquareNumbers = require('./js/sequences/sequences-standard/square-numbers/get-square-numbers')
const getNSquareNumbers = require('./js/sequences/sequences-standard/square-numbers/get-n-square-numbers')
const getNthSquareNumber = require('./js/sequences/sequences-standard/square-numbers/get-nth-square-number')
const isSquareNumber = require('./js/sequences/sequences-standard/square-numbers/is-square-number')

const getTriangleNumbers = require('./js/sequences/sequences-standard/triangle-numbers/get-triangle-numbers')
const getNTriangleNumbers = require('./js/sequences/sequences-standard/triangle-numbers/get-n-triangle-numbers')
const getNthTriangleNumber = require('./js/sequences/sequences-standard/triangle-numbers/get-nth-triangle-number')
const isTriangleNumber = require('./js/sequences/sequences-standard/triangle-numbers/is-triangle-number')

const main = {
  getNumbersAsJson,
  getNumberAsJson,

  getCubeNumbers,
  getNCubeNumbers,
  getNthCubeNumber,
  isCubeNumber,

  getFibonacciNumbers,
  getNFibonacciNumbers,
  getNthFibonacciNumber,
  isFibonacciNumber,
  isFibonacciNumberFast,

  getPadovanNumbers,
  getNPadovanNumbers,
  getNthPadovanNumber,
  isPadovanNumber,

  getPrimeNumbers,
  getNPrimeNumbers,
  getNthPrimeNumber,
  isPrimeNumber,
  isPrimeNumberFast,

  getSquareNumbers,
  getNSquareNumbers,
  getNthSquareNumber,
  isSquareNumber,

  getTriangleNumbers,
  getNTriangleNumbers,
  getNthTriangleNumber,
  isTriangleNumber
}

module.exports = main
