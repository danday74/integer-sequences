const Big = require('big.js.safe')
const main = require('../../..')
const config = require('../../../config')
const spec = require('../../specs/get-n-numbers-spec')

describe('getNPadovanNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNPadovanNumbers, config.PADOVAN_NUMBERS_UPTO_100,
    {n: Big('300'), value: Big('2363282504460128817149946336533734471')})
})
