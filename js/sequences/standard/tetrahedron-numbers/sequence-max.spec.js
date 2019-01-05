const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-numbers-spec')

describe('tetrahedron.sequenceMax', () => {
  spec(main.tetrahedron.sequenceMax, config.TETRAHEDRON_NUMBERS_UPTO_100, Big('99846044'))
})
