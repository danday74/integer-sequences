const Big = require('big.js')
const spec = require('../specs/get-n-numbers-spec')
const main = require('../..')
const config = require('../../config')

describe('getNSquareNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNSquareNumbers, 10, config.SQUARE_NUMBERS_UPTO_100, Big(1000000000000))
})
