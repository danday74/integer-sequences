const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const config = require('../../config')
const main = require('../..')

describe('isPrimeNumber', () => {

  it('null', () => {
    const seriesIdx = main.isPrimeNumber()
    expect(seriesIdx).to.be.undefined
  })

  it('0', () => {
    const seriesIdx = main.isPrimeNumber(0)
    expect(seriesIdx).to.be.undefined
  })

  it('1', () => {
    const seriesIdx = main.isPrimeNumber(1)
    expect(seriesIdx).to.equal(false)
  })

  it('2', () => {
    const seriesIdx = main.isPrimeNumber(2)
    expect(seriesIdx).to.eql(Big(1))
  })

  it('3', () => {
    const seriesIdx = main.isPrimeNumber(Big(3))
    expect(seriesIdx).to.eql(Big(2))
  })

  it('4', () => {
    const seriesIdx = main.isPrimeNumber(Big(4))
    expect(seriesIdx).to.equal(false)
  })

  it('5', () => {
    const seriesIdx = main.isPrimeNumber(Big(5))
    expect(seriesIdx).to.eql(Big(3))
  })

  it('366', () => {
    const seriesIdx = main.isPrimeNumber('366')
    expect(seriesIdx).to.equal(false)
  })

  it('367', () => {
    const seriesIdx = main.isPrimeNumber('367')
    expect(seriesIdx).to.eql(Big(73))
  })

  it('last supported prime', () => {
    const seriesIdx = main.isPrimeNumber(config.LAST_PRIME)
    expect(seriesIdx).to.eql(Big(config.LAST_PRIME_SERIES_IDX))
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
