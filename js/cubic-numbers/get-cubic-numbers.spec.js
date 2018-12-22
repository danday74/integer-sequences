const Big = require('big.js')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/get-numbers-spec')

describe('getCubicNumbers', () => {
  spec(main.getCubicNumbers, config.CUBIC_NUMBERS_UPTO_100, '63', Big(99897344))
})
