const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const config = require('../../config')
const main = require('../..')

describe('getNthPrimeNumber', () => {

  it('null', () => {
    const number = main.getNthPrimeNumber()
    expect(number).to.be.undefined
  })

  it('P0', () => {
    const number = main.getNthPrimeNumber(0)
    expect(number).to.be.undefined
  })

  it('P1', () => {
    const number = main.getNthPrimeNumber(1)
    expect(number).to.eql(Big(2))
  })

  it('P2', () => {
    const number = main.getNthPrimeNumber(2)
    expect(number).to.eql(Big(3))
  })

  it('P3', () => {
    const number = main.getNthPrimeNumber(Big(3))
    expect(number).to.eql(Big(5))
  })

  it('P4', () => {
    const number = main.getNthPrimeNumber(Big(4))
    expect(number).to.eql(Big(7))
  })

  it('P5', () => {
    const number = main.getNthPrimeNumber('5')
    expect(number).to.eql(Big(11))
  })

  it('P73', () => {
    const number = main.getNthPrimeNumber('73')
    expect(number).to.eql(Big(367))
  })

  it('last supported prime', () => {
    const number = main.getNthPrimeNumber(config.LAST_PRIME_SERIES_IDX)
    expect(number).to.eql(Big(config.LAST_PRIME))
  })

  it('greater than last supported prime', () => {
    const number = main.getNthPrimeNumber(config.LAST_PRIME_SERIES_IDX + 1)
    expect(number).to.be.undefined
  })
})
