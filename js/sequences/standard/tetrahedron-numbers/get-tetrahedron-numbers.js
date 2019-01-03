const getNthTetrahedronNumber = require('./get-nth-tetrahedron-number')
const getNumbers = require('../../../more/series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthTetrahedronNumber, max)
