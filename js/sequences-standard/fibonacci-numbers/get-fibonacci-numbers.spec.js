const Big = require('big.js.safe')
const main = require('../../..')
const config = require('../../../config')
const spec = require('../../other/specs/get-numbers-spec')

describe('getFibonacciNumbers', () => {
  spec(main.getFibonacciNumbers, config.FIBONACCI_NUMBERS_UPTO_100, Big('63245986'))
})
