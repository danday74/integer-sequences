const term = require('./term')
const getSequenceMax = require('../../../more/series/get-sequence-max')
module.exports = (max = 0) => getSequenceMax(term, max)
