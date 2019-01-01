const _ = require('lodash')
const Big = require('big.js.safe')
const getFibonacciNumbers = require('./get-fibonacci-numbers')
const getNthFibonacciNumber = require('./get-nth-fibonacci-number')
const isFibonacciNumberFast = require('./is-fibonacci-number-fast')

const isFibonacciNumber = (n = -1) => {
  n = Big(n)
  if (n.lt(0)) return undefined
  if (n.eq(0)) return getNthFibonacciNumber(0)
  if (n.eq(1)) return [Big(1), Big(2)]

  if (!isFibonacciNumberFast(n)) return false

  // simply returning Big(numbers.length) is probably sufficient but will leave for now
  const numbers = getFibonacciNumbers(n)
  const last = _.last(numbers)
  return n.eq(last) ? Big(numbers.length) : /* istanbul ignore next */ false
}

module.exports = isFibonacciNumber
