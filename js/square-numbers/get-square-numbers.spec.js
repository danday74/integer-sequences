const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getSquareNumbers', () => {

  it('null', () => {
    const numbers = main.getSquareNumbers()
    expect(numbers).to.eql([])
  })

  it('100', () => {

    const EXPECTED = [Big(1), Big(4), Big(9), Big(16), Big(25), Big(36), Big(49), Big(64), Big(81), Big(100)]
    let numbers

    numbers = main.getSquareNumbers(100)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getSquareNumbers(Big(100))
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getSquareNumbers('99')
    expect(numbers).to.have.lengthOf(EXPECTED.length - 1)
  })

  it('100 mill', () => {
    const numbers = main.getSquareNumbers('100000000')
    expect(_.last(numbers)).to.eql(Big(100000000))
  })
})
