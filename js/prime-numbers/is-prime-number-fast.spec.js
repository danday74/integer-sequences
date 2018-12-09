const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const config = require('../../config')
const main = require('../..')

describe('isPrimeNumberFast', () => {

  it('null', () => {
    const seriesIdx = main.isPrimeNumberFast()
    expect(seriesIdx).to.be.undefined
  })

  it('0', () => {
    const seriesIdx = main.isPrimeNumberFast(0)
    expect(seriesIdx).to.be.undefined
  })

  it('1', () => {
    const seriesIdx = main.isPrimeNumberFast(1)
    expect(seriesIdx).to.equal(false)
  })

  it('2', () => {
    const seriesIdx = main.isPrimeNumberFast(2)
    expect(seriesIdx).to.equal(true)
  })

  it('3', () => {
    const seriesIdx = main.isPrimeNumberFast(Big(3))
    expect(seriesIdx).to.equal(true)
  })

  it('4', () => {
    const seriesIdx = main.isPrimeNumberFast(Big(4))
    expect(seriesIdx).to.equal(false)
  })

  it('5', () => {
    const seriesIdx = main.isPrimeNumberFast(Big(5))
    expect(seriesIdx).to.equal(true)
  })

  it('366', () => {
    const seriesIdx = main.isPrimeNumberFast('366')
    expect(seriesIdx).to.equal(false)
  })

  it('367', () => {
    const seriesIdx = main.isPrimeNumberFast('367')
    expect(seriesIdx).to.equal(true)
  })

  it('last supported prime', () => {
    const seriesIdx = main.isPrimeNumberFast(config.LAST_PRIME)
    expect(seriesIdx).to.equal(true)
  })

  it('greater than last supported prime (not prime)', () => {
    const seriesIdx = main.isPrimeNumberFast(config.LAST_PRIME + 1)
    expect(seriesIdx).to.equal(false)
  })

  it('greater than last supported prime (prime)', () => {
    const seriesIdx = main.isPrimeNumberFast(config.NEXT_PRIME_AFTER_LAST)
    expect(seriesIdx).to.equal(true)
  })
})
