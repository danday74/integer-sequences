const getNthTriangleNumber = require('./get-nth-triangle-number')
const getNumbers = require('../../../more/series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthTriangleNumber, max)