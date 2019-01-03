const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-n-numbers-spec')

describe('getNTetrahedronNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNTetrahedronNumbers, config.TETRAHEDRON_NUMBERS_UPTO_100, {n: Big('1000000'), value: Big('166667166667000000'), testName: '1m'})
})
