const _ = require('lodash')
const Big = require('big.js.safe')
const getPadovanNumbers = require('./get-padovan-numbers')
const getNthPadovanNumber = require('./get-nth-padovan-number')

const isPadovanNumber = (n = -1) => {
  n = Big(n)
  if (n.lt(0)) return undefined
  if (n.eq(0)) return getNthPadovanNumber(0)
  if (n.eq(1)) return [Big(1), Big(2), Big(3)]
  if (n.eq(2)) return [Big(4), Big(5)]

  const numbers = getPadovanNumbers(n)
  const last = _.last(numbers)
  return n.eq(last) ? Big(numbers.length) : false
}

module.exports = isPadovanNumber
