const getNthFibonacciNumber = require('./get-nth-fibonacci-number')
const getNumbers = require('../../../more/series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthFibonacciNumber, max)
