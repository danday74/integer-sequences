const _ = require('lodash')
const Big = require('big.js')
const getCubicNumbers = require('./get-cubic-numbers')

const isCubicNumber = (n = 0) => {
  n = Big(n)
  if (n.lt(1)) return undefined
  const numbers = getCubicNumbers(n)
  const lastNumber = _.last(numbers)
  return lastNumber.eq(n) ? Big(numbers.length) : false
}

module.exports = isCubicNumber
