const getNumberAsJson = require('./js/numbers-as-json/get-number-as-json')
const getNumbersAsJson = require('./js/numbers-as-json/get-numbers-as-json')

const cube = require('./js/sequences/standard/cube-numbers')
const fibonacci = require('./js/sequences/standard/fibonacci-numbers')
const padovan = require('./js/sequences/standard/padovan-numbers')
const prime = require('./js/sequences/irregular/prime-numbers')
const square = require('./js/sequences/standard/square-numbers')
const tetrahedron = require('./js/sequences/standard/tetrahedron-numbers')
const triangle = require('./js/sequences/standard/triangle-numbers')

const main = {
  getNumberAsJson,
  getNumbersAsJson,
  cube,
  fibonacci,
  padovan,
  prime,
  square,
  tetrahedron,
  triangle
}

module.exports = main
