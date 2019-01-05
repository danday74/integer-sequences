const term = require('./term')
const getNumbers = require('../../../more/series/get-numbers')
module.exports = (max = 0) => getNumbers(term, max)
