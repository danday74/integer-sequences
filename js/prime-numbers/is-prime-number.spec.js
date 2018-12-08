const chai = require('chai')
const expect = chai.expect
const config = require('../../config')
const main = require('../..')

describe('isPrimeNumber', () => {

  it('null', () => {
    const seriesIdx = main.isPrimeNumber()
    expect(seriesIdx).to.equal(undefined)
  })

  it('0', () => {
    const seriesIdx = main.isPrimeNumber(0)
    expect(seriesIdx).to.equal(undefined)
  })

  it('1', () => {
    const seriesIdx = main.isPrimeNumber(1)
    expect(seriesIdx).to.equal(false)
  })

  it('2', () => {
    const seriesIdx = main.isPrimeNumber(2)
    expect(seriesIdx).to.equal(1)
  })

  it('3', () => {
    const seriesIdx = main.isPrimeNumber(3)
    expect(seriesIdx).to.equal(2)
  })

  it('4', () => {
    const seriesIdx = main.isPrimeNumber(4)
    expect(seriesIdx).to.equal(false)
  })

  it('5', () => {
    const seriesIdx = main.isPrimeNumber(5)
    expect(seriesIdx).to.equal(3)
  })

  it('366', () => {
    const seriesIdx = main.isPrimeNumber(366)
    expect(seriesIdx).to.equal(false)
  })

  it('367', () => {
    const seriesIdx = main.isPrimeNumber(367)
    expect(seriesIdx).to.equal(73)
  })

  it('last supported prime', () => {
    const seriesIdx = main.isPrimeNumber(config.LAST_PRIME)
    expect(seriesIdx).to.equal(config.LAST_PRIME_SERIES_IDX)
  })

  it('greater than last supported prime (not prime)', () => {
    const seriesIdx = main.isPrimeNumber(config.LAST_PRIME + 1)
    expect(seriesIdx).to.equal(false)
  })

  it('greater than last supported prime (prime)', () => {
    const seriesIdx = main.isPrimeNumber(config.NEXT_PRIME_AFTER_LAST)
    expect(seriesIdx).to.equal(true) // here we can only return true
  })
})
