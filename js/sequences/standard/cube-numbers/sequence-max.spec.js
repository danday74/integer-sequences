const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-sequence-max-spec')

describe('cube.sequenceMax', () => {
  spec(main.cube.sequenceMax, config.CUBE_NUMBERS_UPTO_100, Big('99897344'))
})
