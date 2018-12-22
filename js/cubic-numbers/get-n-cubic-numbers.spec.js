const Big = require('big.js')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/get-n-numbers-spec')

describe('getNCubicNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNCubicNumbers, config.CUBIC_NUMBERS_UPTO_100, 4, Big(1000000000000000000))
})
