const Big = require('big.js')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/get-n-numbers-spec')

describe('getNCubeNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNCubeNumbers, config.CUBE_NUMBERS_UPTO_100, Big('1000000000000000000'))
})
