const term = require('./term')
const getSequence = require('../../../more/series/get-sequence')
module.exports = (n = 0) => getSequence(term, n)
