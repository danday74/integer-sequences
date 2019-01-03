const getNthTriangleNumber = require('./get-nth-triangle-number')
const getNNumbers = require('../../series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthTriangleNumber, n)
