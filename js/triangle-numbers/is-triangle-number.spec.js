const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('isTriangleNumber', () => {

  it('null', () => {
    const seriesIdx = main.isTriangleNumber()
    expect(seriesIdx).to.be.undefined
  })

  it('0', () => {
    const seriesIdx = main.isTriangleNumber(0)
    expect(seriesIdx).to.be.undefined
  })

  it('1', () => {
    const seriesIdx = main.isTriangleNumber(1)
    expect(seriesIdx).to.eql(Big(1))
  })

  it('2', () => {
    const seriesIdx = main.isTriangleNumber(2)
    expect(seriesIdx).to.equal(false)
  })

  it('3', () => {
    const seriesIdx = main.isTriangleNumber(Big(3))
    expect(seriesIdx).to.eql(Big(2))
  })

  it('4', () => {
    const seriesIdx = main.isTriangleNumber(Big(4))
    expect(seriesIdx).to.equal(false)
  })

  it('5', () => {
    const seriesIdx = main.isTriangleNumber(Big(5))
    expect(seriesIdx).to.equal(false)
  })

  it('2700', () => {
    const seriesIdx = main.isTriangleNumber('2700')
    expect(seriesIdx).to.equal(false)
  })

  it('2701', () => {
    const seriesIdx = main.isTriangleNumber('2701')
    expect(seriesIdx).to.eql(Big(73))
  })
})
