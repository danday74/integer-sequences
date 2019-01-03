const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-n-numbers-spec')

describe('getNCubeNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNCubeNumbers, config.CUBE_NUMBERS_UPTO_100, {n: Big('1000000'), value: Big('1000000000000000000'), testName: '1m'})
})
