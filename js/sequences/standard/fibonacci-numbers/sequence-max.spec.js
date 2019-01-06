const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-sequence-max-spec')

describe('fibonacci.sequenceMax', () => {
  spec(main.fibonacci.sequenceMax, config.FIBONACCI_NUMBERS_UPTO_100, Big('63245986'))
})
