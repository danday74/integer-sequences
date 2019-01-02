// KEEP ALIGNED get-numbers-as-json.js and get-prime-numbers-as-json-for-testing.js

const _ = require('lodash')
const Big = require('big.js.safe')
const getCubeNumbers = require('../cube-numbers/get-cube-numbers')
const getFibonacciNumbers = require('../fibonacci-numbers/get-fibonacci-numbers')
const getPadovanNumbers = require('../padovan-numbers/get-padovan-numbers')
const getPrimeNumbers = require('../prime-numbers/get-prime-numbers')
const getSquareNumbers = require('../square-numbers/get-square-numbers')
const getTriangleNumbers = require('../triangle-numbers/get-triangle-numbers')
const isFibonacciNumber = require('../fibonacci-numbers/is-fibonacci-number')
const isPadovanNumber = require('../padovan-numbers/is-padovan-number')
const config = require('../../config')

const nextFibonacci = (series, idx, i) => {
  if (i === 1) return isFibonacciNumber(i)
  return next(series, idx, i)
}

const nextPadovan = (series, idx, i) => {
  if (i <= 2) return isPadovanNumber(i)
  return next(series, idx, i)
}

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
  const f = getFibonacciNumbers(max)
  const pad = getPadovanNumbers(max)
  let p
  try {
    p = getPrimeNumbers(max)
  } catch (e) {
    /* istanbul ignore next */
    p = getPrimeNumbers()
  }
  const s = getSquareNumbers(max)
  const t = getTriangleNumbers(max)

  const len = numbers.length + 1

  let cIdx = _.sortedIndex(c, len)
  let fIdx = _.sortedIndex(f, len)
  let padIdx = _.sortedIndex(pad, len)
  let pIdx = _.sortedIndex(p, len)
  let sIdx = _.sortedIndex(s, len)
  let tIdx = _.sortedIndex(t, len)

  const intMax = parseInt(max.toFixed()) // faster
  for (let i = len; i <= intMax; i++) {

    const json = {
      number: i,
      cube: next(c, cIdx, i),
      fibonacci: nextFibonacci(f, fIdx, i),
      padovan: nextPadovan(pad, padIdx, i),
      prime: nextPrime(p, pIdx, i),
      square: next(s, sIdx, i),
      triangle: next(t, tIdx, i)
    }

    json.cube && cIdx++
    if (json.fibonacci) {
      if (i === 1) fIdx++
      fIdx++
    }
    if (json.padovan) {
      if (i === 1) padIdx += 2
      if (i === 2) padIdx++
      padIdx++
    }
    json.prime && pIdx++
    json.square && sIdx++
    json.triangle && tIdx++

    numbers.push(json)
  }

  // improves performance by avoiding slice where possible
  return (max.eq(numbers.length)) ? numbers : numbers.slice(0, max)
}

module.exports = getNumbersAsJson
