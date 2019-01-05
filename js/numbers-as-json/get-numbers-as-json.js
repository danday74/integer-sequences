// KEEP ALIGNED get-numbers-as-json.js and get-prime-numbers-as-json-for-testing.js

const _ = require('lodash')
const Big = require('big.js.safe')
const cube = require('../sequences/standard/cube-numbers')
const fibonacci = require('../sequences/standard/fibonacci-numbers')
const padovan = require('../sequences/standard/padovan-numbers')
const getPrimeNumbers = require('../sequences/irregular/prime-numbers/get-prime-numbers')
const square = require('../sequences/standard/square-numbers')
const tetrahedron = require('../sequences/standard/tetrahedron-numbers')
const triangle = require('../sequences/standard/triangle-numbers')
const config = require('../../config')

const nextFibonacci = (series, idx, i) => {
  if (i === 1) return fibonacci.isTerm(i)
  return next(series, idx, i)
}

const nextPadovan = (series, idx, i) => {
  if (i <= 2) return padovan.isTerm(i)
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
  if (max.lt(0)) return undefined
  if (max.eq(0)) return []

  const c = cube.sequenceMax(max)
  const f = fibonacci.sequenceMax(max)
  const pad = padovan.sequenceMax(max)
  let p
  try {
    p = getPrimeNumbers(max)
  } catch (e) {
    /* istanbul ignore next */
    p = getPrimeNumbers()
  }
  const s = square.sequenceMax(max)
  const tet = tetrahedron.sequenceMax(max)
  const t = triangle.sequenceMax(max)

  const len = numbers.length + 1

  let cIdx = _.sortedIndex(c, len)
  let fIdx = _.sortedIndex(f, len)
  let padIdx = _.sortedIndex(pad, len)
  let pIdx = _.sortedIndex(p, len)
  let sIdx = _.sortedIndex(s, len)
  let tetIdx = _.sortedIndex(tet, len)
  let tIdx = _.sortedIndex(t, len)

  const intMax = parseInt(max.toFixed()) // faster
  for (let i = len; i <= intMax; i++) {

    const json = {
      number: i, // Big(i) 400ms slower than i
      cube: next(c, cIdx, i),
      fibonacci: nextFibonacci(f, fIdx, i),
      padovan: nextPadovan(pad, padIdx, i),
      prime: nextPrime(p, pIdx, i),
      square: next(s, sIdx, i),
      tetrahedron: next(tet, tetIdx, i),
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
    json.tetrahedron && tetIdx++
    json.triangle && tIdx++

    numbers.push(json)
  }

  // improves performance by avoiding slice where possible
  return (max.eq(numbers.length)) ? numbers : numbers.slice(0, max)
}

module.exports = getNumbersAsJson
