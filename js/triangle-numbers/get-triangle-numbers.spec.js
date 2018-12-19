const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getTriangleNumbers', () => {

  it('null', () => {
    const numbers = main.getTriangleNumbers()
    expect(numbers).to.eql([])
  })

  it('up to 100', () => {

    const EXPECTED = [Big(1), Big(3), Big(6), Big(10), Big(15), Big(21), Big(28), Big(36), Big(45), Big(55), Big(66), Big(78), Big(91)]
    let numbers

    numbers = main.getTriangleNumbers(100)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getTriangleNumbers(Big(91))
    expect(numbers).to.have.lengthOf(EXPECTED.length)

    numbers = main.getTriangleNumbers('90')
    expect(numbers).to.have.lengthOf(EXPECTED.length - 1)
  })

  it('up to 100 mill', () => {
    const numbers = main.getTriangleNumbers(100000000)
    expect(_.last(numbers)).to.eql(Big(99991011))
  })
})
