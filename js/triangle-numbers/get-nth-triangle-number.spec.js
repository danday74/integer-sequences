const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getNthTriangleNumber', () => {

  it('null', () => {
    const number = main.getNthTriangleNumber()
    expect(number).to.equal(undefined)
  })

  it('T0', () => {
    const number = main.getNthTriangleNumber(0)
    expect(number).to.equal(undefined)
  })

  it('T1', () => {
    const number = main.getNthTriangleNumber(1)
    expect(number).to.equal(1)
  })

  it('T2', () => {
    const number = main.getNthTriangleNumber(2)
    expect(number).to.equal(3)
  })

  it('T3', () => {
    const number = main.getNthTriangleNumber(3)
    expect(number).to.equal(6)
  })

  it('T4', () => {
    const number = main.getNthTriangleNumber(4)
    expect(number).to.equal(10)
  })

  it('T5', () => {
    const number = main.getNthTriangleNumber(5)
    expect(number).to.equal(15)
  })

  it('T73', () => {
    const number = main.getNthTriangleNumber(73)
    expect(number).to.equal(2701)
  })
})
