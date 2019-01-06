const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-sequence-spec')

describe('padovan.sequence', function () {
  this.enableTimeouts(false)
  spec(main.padovan.sequence, config.PADOVAN_NUMBERS_UPTO_100,
    {n: Big('300'), value: Big('2363282504460128817149946336533734471')})
})
