const Big = require('big.js')
const spec = require('../specs/get-n-numbers-spec')
const main = require('../..')
const config = require('../../config')

describe('getNSquareNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNSquareNumbers, config.SQUARE_NUMBERS_UPTO_100, 10, Big(1000000000000))
})
