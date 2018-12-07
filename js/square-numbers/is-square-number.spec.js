const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('isSquareNumber', () => {

  it('0', () => {
    const seriesIdx = main.isSquareNumber(0)
    expect(seriesIdx).to.equal(undefined)
  })

  it('1', () => {
    const seriesIdx = main.isSquareNumber(1)
    expect(seriesIdx).to.equal(1)
  })

  it('2', () => {
    const seriesIdx = main.isSquareNumber(2)
    expect(seriesIdx).to.equal(false)
  })

  it('3', () => {
    const seriesIdx = main.isSquareNumber(3)
    expect(seriesIdx).to.equal(false)
  })

  it('4', () => {
    const seriesIdx = main.isSquareNumber(4)
    expect(seriesIdx).to.equal(2)
  })

  it('5', () => {
    const seriesIdx = main.isSquareNumber(5)
    expect(seriesIdx).to.equal(false)
  })

  it('5328', () => {
    const seriesIdx = main.isSquareNumber(5328)
    expect(seriesIdx).to.equal(false)
  })

  it('5329', () => {
    const seriesIdx = main.isSquareNumber(5329)
    expect(seriesIdx).to.equal(73)
  })
})
