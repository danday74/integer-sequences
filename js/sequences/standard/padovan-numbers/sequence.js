const term = require('./term')
const getNNumbers = require('../../../more/series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(term, n)
