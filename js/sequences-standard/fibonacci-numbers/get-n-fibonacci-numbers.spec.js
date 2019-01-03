const Big = require('big.js.safe')
const main = require('../../..')
const config = require('../../../config')
const spec = require('../../specs/get-n-numbers-spec')

describe('getNFibonacciNumbers', function () {
  this.enableTimeouts(false)
  spec(main.getNFibonacciNumbers, config.FIBONACCI_NUMBERS_UPTO_100,
    {n: Big('300'), value: Big('222232244629420445529739893461909967206666939096499764990979600')})
})
