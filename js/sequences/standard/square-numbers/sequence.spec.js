const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-n-numbers-spec')

describe('square.sequence', function () {
  this.enableTimeouts(false)
  spec(main.square.sequence, config.SQUARE_NUMBERS_UPTO_100, {n: Big('1000000'), value: Big('1000000000000'), testName: '1m'})
})
