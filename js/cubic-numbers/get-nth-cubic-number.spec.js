const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('getNthCubicNumber', () => {

  it('null', () => {
    const number = main.getNthCubicNumber()
    expect(number).to.be.undefined
  })

  it('C0', () => {
    const number = main.getNthCubicNumber(0)
    expect(number).to.be.undefined
  })

  it('C1', () => {
    const number = main.getNthCubicNumber(1)
    expect(number).to.eql(Big(1))
  })

  it('C2', () => {
    const number = main.getNthCubicNumber(2)
    expect(number).to.eql(Big(8))
  })

  it('C3', () => {
    const number = main.getNthCubicNumber(Big(3))
    expect(number).to.eql(Big(27))
  })

  it('C4', () => {
    const number = main.getNthCubicNumber(Big(4))
    expect(number).to.eql(Big(64))
  })

  it('C5', () => {
    const number = main.getNthCubicNumber('5')
    expect(number).to.eql(Big(125))
  })

  it('C73', () => {
    const number = main.getNthCubicNumber('73')
    expect(number).to.eql(Big(389017))
  })
})
