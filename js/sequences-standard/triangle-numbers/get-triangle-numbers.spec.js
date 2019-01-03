const Big = require('big.js.safe')
const main = require('../../..')
const config = require('../../../config')
const spec = require('../../other/specs/get-numbers-spec')

describe('getTriangleNumbers', () => {
  spec(main.getTriangleNumbers, config.TRIANGLE_NUMBERS_UPTO_100, Big('99991011'))
})
