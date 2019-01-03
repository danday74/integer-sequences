const getNthCubeNumber = require('./get-nth-cube-number')
const getNNumbers = require('../../../more/series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthCubeNumber, n)
