const getNthCubicNumber = require('./get-nth-cubic-number')
const getNumbers = require('../series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthCubicNumber, max)
