const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getNthTriangleNumber', () => {

  it('T0', () => {
    const seriesIdx = main.getNthTriangleNumber(0)
    expect(seriesIdx).to.equal(undefined)
  })

  it('T1', () => {
    const seriesIdx = main.getNthTriangleNumber(1)
    expect(seriesIdx).to.equal(1)
  })

  it('T2', () => {
    const seriesIdx = main.getNthTriangleNumber(2)
    expect(seriesIdx).to.equal(3)
  })

  it('T3', () => {
    const seriesIdx = main.getNthTriangleNumber(3)
    expect(seriesIdx).to.equal(6)
  })

  it('T4', () => {
    const seriesIdx = main.getNthTriangleNumber(4)
    expect(seriesIdx).to.equal(10)
  })

  it('T5', () => {
    const seriesIdx = main.getNthTriangleNumber(5)
    expect(seriesIdx).to.equal(15)
  })

  it('T73', () => {
    const seriesIdx = main.getNthTriangleNumber(73)
    expect(seriesIdx).to.equal(2701)
  })
})
