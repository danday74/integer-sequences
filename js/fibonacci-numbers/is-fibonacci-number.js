const _ = require('lodash')
const Big = require('big.js')
const getFibonacciNumbers = require('./get-fibonacci-numbers')
const getNthFibonacciNumber = require('./get-nth-fibonacci-number')

const isFibonacciNumber = (n = -1) => {
  n = Big(n)
  if (n.lt(0)) return undefined
  if (n.eq(0)) return getNthFibonacciNumber(0)
  // if (n.eq(1)) return [Big(1), Big(2)] // but nothing else returns an array!

  // Could add isFibonacciNumberFast and use that to return false early, this would save time with very big numbers
  // See https://stackoverflow.com/questions/2432669/test-if-a-number-is-fibonacci

  const numbers = getFibonacciNumbers(n)
  const last = _.last(numbers)
  return n.eq(last) ? Big(numbers.length) : false
}

module.exports = isFibonacciNumber
