const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getNthSquareNumber', () => {

  it('0', () => {
    const seriesIdx = main.getNthSquareNumber(0)
    expect(seriesIdx).to.equal(undefined)
  })

  it('1', () => {
    const seriesIdx = main.getNthSquareNumber(1)
    expect(seriesIdx).to.equal(1)
  })

  it('2', () => {
    const seriesIdx = main.getNthSquareNumber(2)
    expect(seriesIdx).to.equal(4)
  })

  it('3', () => {
    const seriesIdx = main.getNthSquareNumber(3)
    expect(seriesIdx).to.equal(9)
  })

  it('73', () => {
    const seriesIdx = main.getNthSquareNumber(73)
    expect(seriesIdx).to.equal(5329)
  })
})
