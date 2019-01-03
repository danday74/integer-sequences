const getNthSquareNumber = require('./get-nth-square-number')
const getNNumbers = require('../../../other/series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthSquareNumber, n)
