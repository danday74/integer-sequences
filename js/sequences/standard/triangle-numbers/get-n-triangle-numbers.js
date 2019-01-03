const getNthTriangleNumber = require('./get-nth-triangle-number')
const getNNumbers = require('../../../more/series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthTriangleNumber, n)
