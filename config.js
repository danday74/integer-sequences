const _ = require('lodash')
const Big = require('big.js')
const LAST_PRIME = 104395301

const config = {
  LAST_PRIME,
  LAST_PRIME_SERIES_IDX: 6000000,
  NEXT_PRIME_AFTER_LAST: 104395303,
  FIRST_PRIME_PER_FILE: {
    1: 2,
    2: 15485867,
    3: 32452867,
    4: 49979693,
    5: 67867979,
    6: 86028157
  },
  LAST_PRIME_PER_FILE: {
    1: 15485863,
    2: 32452843,
    3: 49979687,
    4: 67867967,
    5: 86028121,
    6: LAST_PRIME
  },
  seriesKeys: {
    cube: 'C',
    fibonacci: 'F',
    prime: 'P',
    square: 'S',
    triangle: 'T'
  },
  CUBE_NUMBERS_UPTO_100: _.map([1, 8, 27, 64], Big),
  FIBONACCI_NUMBERS_UPTO_100: _.map([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89], Big),
  PRIME_NUMBERS_UPTO_100: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
  SQUARE_NUMBERS_UPTO_100: _.map([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], Big),
  TRIANGLE_NUMBERS_UPTO_100: _.map([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91], Big)
}

module.exports = config
