const getNumbersAsJson = require('./js/numbers-as-json/get-numbers-as-json')
const getNumberAsJson = require('./js/numbers-as-json/get-number-as-json')

const cube = require('./js/sequences/standard/cube-numbers')
const fibonacci = require('./js/sequences/standard/fibonacci-numbers')
const padovan = require('./js/sequences/standard/padovan-numbers')

const getPrimeNumbers = require('./js/sequences/irregular/prime-numbers/get-prime-numbers')
const getNPrimeNumbers = require('./js/sequences/irregular/prime-numbers/get-n-prime-numbers')
const getNthPrimeNumber = require('./js/sequences/irregular/prime-numbers/get-nth-prime-number')
const isPrimeNumber = require('./js/sequences/irregular/prime-numbers/is-prime-number')
const isPrimeNumberFast = require('./js/sequences/irregular/prime-numbers/is-prime-number-fast')

const square = require('./js/sequences/standard/square-numbers')
const tetrahedron = require('./js/sequences/standard/tetrahedron-numbers')

const getTriangleNumbers = require('./js/sequences/standard/triangle-numbers/get-triangle-numbers')
const getNTriangleNumbers = require('./js/sequences/standard/triangle-numbers/get-n-triangle-numbers')
const getNthTriangleNumber = require('./js/sequences/standard/triangle-numbers/get-nth-triangle-number')
const isTriangleNumber = require('./js/sequences/standard/triangle-numbers/is-triangle-number')

const main = {
  getNumbersAsJson,
  getNumberAsJson,

  cube,
  fibonacci,
  padovan,

  getPrimeNumbers,
  getNPrimeNumbers,
  getNthPrimeNumber,
  isPrimeNumber,
  isPrimeNumberFast,

  square,
  tetrahedron,

  getTriangleNumbers,
  getNTriangleNumbers,
  getNthTriangleNumber,
  isTriangleNumber
}

module.exports = main
