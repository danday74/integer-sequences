const getNthCubeNumber = require('./get-nth-cube-number')
const getNumbers = require('../../../more/series/get-numbers')
module.exports = (max = 0) => getNumbers(getNthCubeNumber, max)
