const Big = require('big.js.safe')
const main = require('../../..')
const config = require('../../../config')
const spec = require('../../specs/get-numbers-spec')

describe('getPadovanNumbers', () => {
  spec(main.getPadovanNumbers, config.PADOVAN_NUMBERS_UPTO_100, Big('82938844'))
})
