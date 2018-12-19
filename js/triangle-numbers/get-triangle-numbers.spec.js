const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')
const config = require('../../config')

describe('getTriangleNumbers', () => {

  it('null', () => {
    const numbers = main.getTriangleNumbers()
    expect(numbers).to.eql([])
  })

  it('list 0', () => {
    const numbers = main.getTriangleNumbers(0)
    expect(numbers).to.eql([])
  })

  it('list 100', () => {

    const EXPECTED = config.TRIANGLE_NUMBERS_UPTO_100
    let numbers

    numbers = main.getTriangleNumbers(100)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getTriangleNumbers(Big(91))
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getTriangleNumbers('90')
    expect(numbers).to.have.lengthOf(EXPECTED.length - 1)
  })

  it('list 100m', () => {
    const numbers = main.getTriangleNumbers('100000000')
    expect(_.last(numbers)).to.eql(Big(99991011))
  })
})
