const getNthTriangleNumber = require('./get-nth-triangle-number')
const getNumbers = require('../../other/series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthTriangleNumber, max)
