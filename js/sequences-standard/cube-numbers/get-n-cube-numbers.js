const getNthCubeNumber = require('./get-nth-cube-number')
const getNNumbers = require('../../series/get-n-numbers')
module.exports = (n = 0) => getNNumbers(getNthCubeNumber, n)
