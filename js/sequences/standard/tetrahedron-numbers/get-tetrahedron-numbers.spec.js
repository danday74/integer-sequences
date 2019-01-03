const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-numbers-spec')

describe('getTetrahedronNumbers', () => {
  spec(main.getTetrahedronNumbers, config.TETRAHEDRON_NUMBERS_UPTO_100, Big('99846044'))
})
