const chai = require('chai')
const expect = chai.expect
const config = require('../../config')
const main = require('../..')

describe('getNthPrimeNumber', () => {

  it('null', () => {
    const seriesIdx = main.getNthPrimeNumber()
    expect(seriesIdx).to.equal(undefined)
  })

  it('P0', () => {
    const seriesIdx = main.getNthPrimeNumber(0)
    expect(seriesIdx).to.equal(undefined)
  })

  it('P1', () => {
    const seriesIdx = main.getNthPrimeNumber(1)
    expect(seriesIdx).to.equal(2)
  })

  it('P2', () => {
    const seriesIdx = main.getNthPrimeNumber(2)
    expect(seriesIdx).to.equal(3)
  })

  it('P3', () => {
    const seriesIdx = main.getNthPrimeNumber(3)
    expect(seriesIdx).to.equal(5)
  })

  it('P4', () => {
    const seriesIdx = main.getNthPrimeNumber(4)
    expect(seriesIdx).to.equal(7)
  })

  it('P5', () => {
    const seriesIdx = main.getNthPrimeNumber(5)
    expect(seriesIdx).to.equal(11)
  })

  it('P73', () => {
    const seriesIdx = main.getNthPrimeNumber(73)
    expect(seriesIdx).to.equal(367)
  })

  it('last supported prime', () => {
    const seriesIdx = main.getNthPrimeNumber(config.LAST_PRIME_SERIES_IDX)
    expect(seriesIdx).to.equal(config.LAST_PRIME)
  })

  it('greater than last supported prime', () => {
    const seriesIdx = main.getNthPrimeNumber(config.LAST_PRIME_SERIES_IDX + 1)
    expect(seriesIdx).to.equal(undefined)
  })
})
