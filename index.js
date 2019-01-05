const getNumbersAsJson = require('./js/numbers-as-json/get-numbers-as-json')
const getNumberAsJson = require('./js/numbers-as-json/get-number-as-json')

const cube = require('./js/sequences/standard/cube-numbers')
const fibonacci = require('./js/sequences/standard/fibonacci-numbers')

const getPadovanNumbers = require('./js/sequences/standard/padovan-numbers/get-padovan-numbers')
const getNPadovanNumbers = require('./js/sequences/standard/padovan-numbers/get-n-padovan-numbers')
const getNthPadovanNumber = require('./js/sequences/standard/padovan-numbers/get-nth-padovan-number')
const isPadovanNumber = require('./js/sequences/standard/padovan-numbers/is-padovan-number')

const getPrimeNumbers = require('./js/sequences/irregular/prime-numbers/get-prime-numbers')
const getNPrimeNumbers = require('./js/sequences/irregular/prime-numbers/get-n-prime-numbers')
const getNthPrimeNumber = require('./js/sequences/irregular/prime-numbers/get-nth-prime-number')
const isPrimeNumber = require('./js/sequences/irregular/prime-numbers/is-prime-number')
const isPrimeNumberFast = require('./js/sequences/irregular/prime-numbers/is-prime-number-fast')

const getSquareNumbers = require('./js/sequences/standard/square-numbers/get-square-numbers')
const getNSquareNumbers = require('./js/sequences/standard/square-numbers/get-n-square-numbers')
const getNthSquareNumber = require('./js/sequences/standard/square-numbers/get-nth-square-number')
const isSquareNumber = require('./js/sequences/standard/square-numbers/is-square-number')

const getTetrahedronNumbers = require('./js/sequences/standard/tetrahedron-numbers/get-tetrahedron-numbers')
const getNTetrahedronNumbers = require('./js/sequences/standard/tetrahedron-numbers/get-n-tetrahedron-numbers')
const getNthTetrahedronNumber = require('./js/sequences/standard/tetrahedron-numbers/get-nth-tetrahedron-number')
const isTetrahedronNumber = require('./js/sequences/standard/tetrahedron-numbers/is-tetrahedron-number')

const getTriangleNumbers = require('./js/sequences/standard/triangle-numbers/get-triangle-numbers')
const getNTriangleNumbers = require('./js/sequences/standard/triangle-numbers/get-n-triangle-numbers')
const getNthTriangleNumber = require('./js/sequences/standard/triangle-numbers/get-nth-triangle-number')
const isTriangleNumber = require('./js/sequences/standard/triangle-numbers/is-triangle-number')

const main = {
  getNumbersAsJson,
  getNumberAsJson,

  cube,
  fibonacci,

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

  getTetrahedronNumbers,
  getNTetrahedronNumbers,
  getNthTetrahedronNumber,
  isTetrahedronNumber,

  getTriangleNumbers,
  getNTriangleNumbers,
  getNthTriangleNumber,
  isTriangleNumber
}

module.exports = main
