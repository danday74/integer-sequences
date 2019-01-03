const getNthSquareNumber = require('./get-nth-square-number')
const getNumbers = require('../../../more/series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthSquareNumber, max)
