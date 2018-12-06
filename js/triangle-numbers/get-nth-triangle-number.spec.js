const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getNthTriangleNumber', () => {

  it('0', () => {
    const seriesIdx = main.getNthTriangleNumber(0)
    expect(seriesIdx).to.equal(undefined)
  })

  it('1', () => {
    const seriesIdx = main.getNthTriangleNumber(1)
    expect(seriesIdx).to.equal(1)
  })

  it('2', () => {
    const seriesIdx = main.getNthTriangleNumber(2)
    expect(seriesIdx).to.equal(3)
  })

  it('3', () => {
    const seriesIdx = main.getNthTriangleNumber(3)
    expect(seriesIdx).to.equal(6)
  })

  it('73', () => {
    const seriesIdx = main.getNthTriangleNumber(73)
    expect(seriesIdx).to.equal(2701)
  })
})
