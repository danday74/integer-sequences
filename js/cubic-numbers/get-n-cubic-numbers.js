const getNthCubicNumber = require('./get-nth-cubic-number')
const getNNumbers = require('../series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthCubicNumber, n)
