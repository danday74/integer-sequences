const Big = require('big.js')
const _ = require('lodash')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('getNTriangleNumbers', function() {

  this.enableTimeouts(false)

  it('null', () => {
    const numbers = main.getNTriangleNumbers()
    expect(numbers).to.eql([])
  })

  it('13', () => {
    const EXPECTED = [Big(1), Big(3), Big(6), Big(10), Big(15), Big(21), Big(28), Big(36), Big(45), Big(55), Big(66), Big(78), Big(91)]
    let numbers

    numbers = main.getNTriangleNumbers(13)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getNTriangleNumbers(Big(13))
    expect(numbers).to.eql(EXPECTED)
  })

  it('1 mill', () => {
    const numbers = main.getNTriangleNumbers('1000000')
    expect(_.last(numbers)).to.eql(Big(500000500000))
  })
})
