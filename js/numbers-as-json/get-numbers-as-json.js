// KEEP ALIGNED get-numbers-as-json.js and get-prime-numbers-as-json-for-testing.js

const _ = require('lodash')
const Big = require('big.js')
const getCubeNumbers = require('../cube-numbers/get-cube-numbers')
const getPrimeNumbers = require('../prime-numbers/get-prime-numbers')
const getSquareNumbers = require('../square-numbers/get-square-numbers')
const getTriangleNumbers = require('../triangle-numbers/get-triangle-numbers')
const config = require('../../config')

const nextPrime = (series, idx, i) => {
  const num = series[idx]
  return (num === i) ? idx + 1 : (i > config.LAST_PRIME) ? /* istanbul ignore next */ null : false
}

const next = (series, idx, i) => {
  const num = series[idx]
  return (num && num.eq(i)) ? Big(idx + 1) : false
}

const numbers = []

const getNumbersAsJson = (max = 0) => {

  max = Big(max)
  if (max.lt(1)) return []

  const c = getCubeNumbers(max)
  let p
  try {
    p = getPrimeNumbers(max)
  } catch (e) {
    /* istanbul ignore next */
    p = getPrimeNumbers()
  }
  const s = getSquareNumbers(max)
  const t = getTriangleNumbers(max)

  let cIdx = _.sortedIndex(c, numbers.length + 1)
  let pIdx = _.sortedIndex(p, numbers.length + 1)
  let sIdx = _.sortedIndex(s, numbers.length + 1)
  let tIdx = _.sortedIndex(t, numbers.length + 1)

  const intMax = parseInt(max.toFixed()) // faster
  for (let i = numbers.length + 1; i <= intMax; i++) {

    const json = {
      number: i,
      cube: next(c, cIdx, i),
      prime: nextPrime(p, pIdx, i),
      square: next(s, sIdx, i),
      triangle: next(t, tIdx, i)
    }

    json.cube && cIdx++
    json.prime && pIdx++
    json.square && sIdx++
    json.triangle && tIdx++

    numbers.push(json)
  }

  // improves performance by avoiding slice where possible
  return (max.eq(numbers.length)) ? numbers : numbers.slice(0, max)
}

module.exports = getNumbersAsJson
