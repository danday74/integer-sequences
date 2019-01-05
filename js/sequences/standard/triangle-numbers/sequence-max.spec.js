const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-numbers-spec')

describe('triangle.sequenceMax', () => {
  spec(main.triangle.sequenceMax, config.TRIANGLE_NUMBERS_UPTO_100, Big('99991011'))
})
