const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-numbers-spec')

describe('getSquareNumbers', () => {
  spec(main.getSquareNumbers, config.SQUARE_NUMBERS_UPTO_100, Big('100000000'))
})
