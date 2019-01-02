const getNthPadovanNumber = require('./get-nth-padovan-number')
const getNumbers = require('../series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthPadovanNumber, max)
