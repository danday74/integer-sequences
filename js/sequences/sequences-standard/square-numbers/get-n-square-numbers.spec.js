const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../other/specs/get-n-numbers-spec')

describe('getNSquareNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNSquareNumbers, config.SQUARE_NUMBERS_UPTO_100, {n: Big('1000000'), value: Big('1000000000000'), testName: '1m'})
})
