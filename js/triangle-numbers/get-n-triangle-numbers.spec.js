const Big = require('big.js')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/get-n-numbers-spec')

describe('getNTriangleNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNTriangleNumbers, config.TRIANGLE_NUMBERS_UPTO_100, Big('500000500000'))
})
