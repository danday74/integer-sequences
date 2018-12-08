const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getNthSquareNumber', () => {

  it('null', () => {
    const seriesIdx = main.getNthSquareNumber()
    expect(seriesIdx).to.equal(undefined)
  })

  it('S0', () => {
    const seriesIdx = main.getNthSquareNumber(0)
    expect(seriesIdx).to.equal(undefined)
  })

  it('S1', () => {
    const seriesIdx = main.getNthSquareNumber(1)
    expect(seriesIdx).to.equal(1)
  })

  it('S2', () => {
    const seriesIdx = main.getNthSquareNumber(2)
    expect(seriesIdx).to.equal(4)
  })

  it('S3', () => {
    const seriesIdx = main.getNthSquareNumber(3)
    expect(seriesIdx).to.equal(9)
  })

  it('S4', () => {
    const seriesIdx = main.getNthSquareNumber(4)
    expect(seriesIdx).to.equal(16)
  })

  it('S5', () => {
    const seriesIdx = main.getNthSquareNumber(5)
    expect(seriesIdx).to.equal(25)
  })

  it('S73', () => {
    const seriesIdx = main.getNthSquareNumber(73)
    expect(seriesIdx).to.equal(5329)
  })
})
