const getNthSquareNumber = require('./get-nth-square-number')
const getNumbers = require('../../other/series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthSquareNumber, max)
