const _ = require('lodash')
const getPrimeNumbers = require('../get-prime-numbers/get-prime-numbers')
const getSquareNumbers = require('../get-square-numbers/get-square-numbers')
const getTriangleNumbers = require('../get-triangle-numbers/get-triangle-numbers')
const config = require('../../config')

const nextPrime = (series, idx, i) => {
  const num = series[idx]
  return (num === i) ? idx + 1 : (i > config.LAST_PRIME) ? /* istanbul ignore next */ null : false
}

const next = (series, idx, i) => {
  const num = series[idx]
  return (num === i) ? idx + 1 : false
}

const numbers = []

const getNumbersAsJson = max => {

  if (max < 1) return []

  let p
  try {
    p = getPrimeNumbers(max)
  } catch (e) {
    /* istanbul ignore next */
    p = getPrimeNumbers()
  }
  const s = getSquareNumbers(max)
  const t = getTriangleNumbers(max)

  let pIdx = _.sortedIndex(p, numbers.length)
  let sIdx = _.sortedIndex(s, numbers.length)
  let tIdx = _.sortedIndex(t, numbers.length)

  for (let i = numbers.length + 1; i <= max; i++) {

    const json = {
      number: i,
      prime: nextPrime(p, pIdx, i),
      square: next(s, sIdx, i),
      triangle: next(t, tIdx, i)
    }

    json.prime && pIdx++
    json.square && sIdx++
    json.triangle && tIdx++

    numbers.push(json)
  }

  // improves performance by avoiding slice where possible
  return (max === numbers.length) ? numbers : numbers.slice(0, max)
}

module.exports = getNumbersAsJson
