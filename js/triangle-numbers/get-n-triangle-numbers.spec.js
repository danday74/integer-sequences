const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')
const config = require('../../config')

describe('getNTriangleNumbers', function () {

  this.enableTimeouts(false)

  it('null', () => {
    const numbers = main.getNTriangleNumbers()
    expect(numbers).to.eql([])
  })

  it('list n=13', () => {
    const EXPECTED = config.TRIANGLE_NUMBERS_UPTO_100
    let numbers

    numbers = main.getNTriangleNumbers(13)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getNTriangleNumbers(Big(13))
    expect(numbers).to.eql(EXPECTED)
  })

  it('list n=1m', () => {
    const numbers = main.getNTriangleNumbers('1000000')
    expect(_.last(numbers)).to.eql(Big(500000500000))
  })
})
