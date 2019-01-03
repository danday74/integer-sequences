const getNthTetrahedronNumber = require('./get-nth-tetrahedron-number')
const getNNumbers = require('../../../more/series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthTetrahedronNumber, n)
