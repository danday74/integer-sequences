const getNthPadovanNumber = require('./get-nth-padovan-number')
const getNNumbers = require('../series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthPadovanNumber, n)
