const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-sequence-spec')

describe('triangle.sequence', function () {
  this.enableTimeouts(false)
  spec(main.triangle.sequence, config.TRIANGLE_NUMBERS_UPTO_100, {n: Big('1000000'), value: Big('500000500000'), testName: '1m'})
})
