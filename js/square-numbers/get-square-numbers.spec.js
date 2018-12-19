const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')
const config = require('../../config')

describe('getSquareNumbers', () => {

  it('null', () => {
    const numbers = main.getSquareNumbers()
    expect(numbers).to.eql([])
  })

  it('list 100', () => {

    const EXPECTED = config.SQUARE_NUMBERS_UPTO_100
    let numbers

    numbers = main.getSquareNumbers(100)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getSquareNumbers(Big(100))
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getSquareNumbers('99')
    expect(numbers).to.have.lengthOf(EXPECTED.length - 1)
  })

  it('list 100m', () => {
    const numbers = main.getSquareNumbers('100000000')
    expect(_.last(numbers)).to.eql(Big(100000000))
  })
})
