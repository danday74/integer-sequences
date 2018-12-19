const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('getNthSquareNumber', () => {

  it('null', () => {
    const number = main.getNthSquareNumber()
    expect(number).to.be.undefined
  })

  it('S0', () => {
    const number = main.getNthSquareNumber(0)
    expect(number).to.be.undefined
  })

  it('S1', () => {
    const number = main.getNthSquareNumber(1)
    expect(number).to.eql(Big(1))
  })

  it('S2', () => {
    const number = main.getNthSquareNumber(2)
    expect(number).to.eql(Big(4))
  })

  it('S3', () => {
    const number = main.getNthSquareNumber(Big(3))
    expect(number).to.eql(Big(9))
  })

  it('S4', () => {
    const number = main.getNthSquareNumber(Big(4))
    expect(number).to.eql(Big(16))
  })

  it('S5', () => {
    const number = main.getNthSquareNumber('5')
    expect(number).to.eql(Big(25))
  })

  it('S73', () => {
    const number = main.getNthSquareNumber('73')
    expect(number).to.eql(Big(5329))
  })
})
