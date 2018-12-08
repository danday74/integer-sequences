const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getNthSquareNumber', () => {

  it('null', () => {
    const number = main.getNthSquareNumber()
    expect(number).to.equal(undefined)
  })

  it('S0', () => {
    const number = main.getNthSquareNumber(0)
    expect(number).to.equal(undefined)
  })

  it('S1', () => {
    const number = main.getNthSquareNumber(1)
    expect(number).to.equal(1)
  })

  it('S2', () => {
    const number = main.getNthSquareNumber(2)
    expect(number).to.equal(4)
  })

  it('S3', () => {
    const number = main.getNthSquareNumber(3)
    expect(number).to.equal(9)
  })

  it('S4', () => {
    const number = main.getNthSquareNumber(4)
    expect(number).to.equal(16)
  })

  it('S5', () => {
    const number = main.getNthSquareNumber(5)
    expect(number).to.equal(25)
  })

  it('S73', () => {
    const number = main.getNthSquareNumber(73)
    expect(number).to.equal(5329)
  })
})
