const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-sequence-max-spec')

describe('padovan.sequenceMax', () => {
  spec(main.padovan.sequenceMax, config.PADOVAN_NUMBERS_UPTO_100, Big('82938844'))
})
