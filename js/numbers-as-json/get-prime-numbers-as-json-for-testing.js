// KEEP ALIGNED get-numbers-as-json.js and get-prime-numbers-as-json-for-testing.js

const _ = require('lodash')
const Big = require('big.js.safe')
const getPrimeNumbers = require('../prime-numbers/get-prime-numbers')
const config = require('../../config')

/* istanbul ignore next */
const nextPrime = (series, idx, i) => {
  const num = series[idx]
  return (num === i) ? idx + 1 : (i > config.LAST_PRIME) ? /* istanbul ignore next */ null : false
}

const numbers = []

/* istanbul ignore next */
const getNumbersAsJson = (max = 0) => {

  max = Big(max)
  if (max.lt(1)) return []

  let p
  try {
    p = getPrimeNumbers(max)
  } catch (e) {
    /* istanbul ignore next */
    p = getPrimeNumbers()
  }

  let pIdx = _.sortedIndex(p, numbers.length + 1)

  const intMax = parseInt(max.toFixed()) // faster
  for (let i = numbers.length + 1; i <= intMax; i++) {

    const json = {
      number: i,
      prime: nextPrime(p, pIdx, i)
    }

    json.prime && pIdx++

    numbers.push(json)
  }

  // improves performance by avoiding slice where possible
  return (max.eq(numbers.length)) ? numbers : numbers.slice(0, max)
}

module.exports = getNumbersAsJson
