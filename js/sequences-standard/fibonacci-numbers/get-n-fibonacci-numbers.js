const getNthFibonacciNumber = require('./get-nth-fibonacci-number')
const getNNumbers = require('../../other/series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthFibonacciNumber, n)
