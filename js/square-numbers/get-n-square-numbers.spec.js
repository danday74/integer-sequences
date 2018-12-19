const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('getNSquareNumbers', function () {

  this.enableTimeouts(false)

  it('null', () => {
    const numbers = main.getNSquareNumbers()
    expect(numbers).to.eql([])
  })

  it('10', () => {
    const EXPECTED = [Big(1), Big(4), Big(9), Big(16), Big(25), Big(36), Big(49), Big(64), Big(81), Big(100)]
    let numbers

    numbers = main.getNSquareNumbers(10)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getNSquareNumbers(Big(10))
    expect(numbers).to.eql(EXPECTED)
  })

  it('1 mill', () => {
    const numbers = main.getNSquareNumbers('1000000')
    expect(_.last(numbers)).to.eql(Big(1000000000000))
  })
})
