const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('isTriangleNumber', () => {

  it('0', () => {
    const seriesIdx = main.isTriangleNumber(0)
    expect(seriesIdx).to.equal(undefined)
  })

  it('1', () => {
    const seriesIdx = main.isTriangleNumber(1)
    expect(seriesIdx).to.equal(1)
  })

  it('2', () => {
    const seriesIdx = main.isTriangleNumber(2)
    expect(seriesIdx).to.equal(false)
  })

  it('3', () => {
    const seriesIdx = main.isTriangleNumber(3)
    expect(seriesIdx).to.equal(2)
  })

  it('4', () => {
    const seriesIdx = main.isTriangleNumber(4)
    expect(seriesIdx).to.equal(false)
  })

  it('5', () => {
    const seriesIdx = main.isTriangleNumber(5)
    expect(seriesIdx).to.equal(false)
  })

  it('2700', () => {
    const seriesIdx = main.isTriangleNumber(2700)
    expect(seriesIdx).to.equal(false)
  })

  it('2701', () => {
    const seriesIdx = main.isTriangleNumber(2701)
    expect(seriesIdx).to.equal(73)
  })
})
