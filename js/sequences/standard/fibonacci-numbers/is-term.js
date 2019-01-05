const _ = require('lodash')
const Big = require('big.js.safe')
const sequenceMax = require('./sequence-max')
const term = require('./term')
const isTermFast = require('./is-term-fast')

const isTerm = (n = -1) => {
  n = Big(n)
  if (n.lt(0)) return undefined
  if (n.eq(0)) return term(0)
  if (n.eq(1)) return [Big(1), Big(2)]

  if (!isTermFast(n)) return false

  // simply returning Big(numbers.length) is probably sufficient but will leave for now
  const numbers = sequenceMax(n)
  const last = _.last(numbers)
  return n.eq(last) ? Big(numbers.length) : /* istanbul ignore next */ false
}

module.exports = isTerm
