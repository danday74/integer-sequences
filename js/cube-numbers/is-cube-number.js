const _ = require('lodash')
const Big = require('big.js')
const getCubeNumbers = require('./get-cube-numbers')

const isCubeNumber = (n = 0) => {
  n = Big(n)
  if (n.lt(1)) return undefined
  const numbers = getCubeNumbers(n)
  const lastNumber = _.last(numbers)
  return lastNumber.eq(n) ? Big(numbers.length) : false
}

module.exports = isCubeNumber
