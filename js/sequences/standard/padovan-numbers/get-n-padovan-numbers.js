const getNthPadovanNumber = require('./get-nth-padovan-number')
const getNNumbers = require('../../../more/series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthPadovanNumber, n)
