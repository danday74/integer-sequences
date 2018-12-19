const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')
const config = require('../../config')

describe('getNSquareNumbers', function () {

  this.enableTimeouts(false)

  it('null', () => {
    const numbers = main.getNSquareNumbers()
    expect(numbers).to.eql([])
  })

  it('list n=10', () => {
    const EXPECTED = config.SQUARE_NUMBERS_UPTO_100
    let numbers

    numbers = main.getNSquareNumbers(10)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getNSquareNumbers(Big(10))
    expect(numbers).to.eql(EXPECTED)
  })

  it('list n=1m', () => {
    const numbers = main.getNSquareNumbers('1000000')
    expect(_.last(numbers)).to.eql(Big(1000000000000))
  })
})
