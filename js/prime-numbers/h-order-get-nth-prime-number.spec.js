const chai = require('chai')
const expect = chai.expect
const config = require('../../config')
const main = require('../..')

describe('getNthPrimeNumber', () => {

  it('null', () => {
    const number = main.getNthPrimeNumber()
    expect(number).to.equal(undefined)
  })

  it('P0', () => {
    const number = main.getNthPrimeNumber(0)
    expect(number).to.equal(undefined)
  })

  it('P1', () => {
    const number = main.getNthPrimeNumber(1)
    expect(number).to.equal(2)
  })

  it('P2', () => {
    const number = main.getNthPrimeNumber(2)
    expect(number).to.equal(3)
  })

  it('P3', () => {
    const number = main.getNthPrimeNumber(3)
    expect(number).to.equal(5)
  })

  it('P4', () => {
    const number = main.getNthPrimeNumber(4)
    expect(number).to.equal(7)
  })

  it('P5', () => {
    const number = main.getNthPrimeNumber(5)
    expect(number).to.equal(11)
  })

  it('P73', () => {
    const number = main.getNthPrimeNumber(73)
    expect(number).to.equal(367)
  })

  it('last supported prime', () => {
    const number = main.getNthPrimeNumber(config.LAST_PRIME_SERIES_IDX)
    expect(number).to.equal(config.LAST_PRIME)
  })

  it('greater than last supported prime', () => {
    const number = main.getNthPrimeNumber(config.LAST_PRIME_SERIES_IDX + 1)
    expect(number).to.equal(undefined)
  })
})
