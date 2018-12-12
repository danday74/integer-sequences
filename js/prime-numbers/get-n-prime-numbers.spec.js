const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')
const config = require('../../config')

const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

describe('getNPrimeNumbers', function () {

  this.enableTimeouts(false)

  // null replaced by all

  it('0', () => {
    const numbers = main.getNPrimeNumbers(0)
    expect(numbers).to.eql([])
  })

  it('1', () => {
    const numbers = main.getNPrimeNumbers(1)
    expect(numbers).to.eql([2])
  })

  it('2', () => {
    const numbers = main.getNPrimeNumbers(2)
    expect(numbers).to.eql([2, 3])
  })

  it('3', () => {
    const numbers = main.getNPrimeNumbers(Big(3))
    expect(numbers).to.eql([2, 3, 5])
  })

  it('4', () => {
    const numbers = main.getNPrimeNumbers(Big(4))
    expect(numbers).to.eql([2, 3, 5, 7])
  })

  it('5', () => {
    const numbers = main.getNPrimeNumbers(Big(5))
    expect(numbers).to.eql([2, 3, 5, 7, 11])
  })

  it('25', () => {
    const numbers = main.getNPrimeNumbers('25')
    expect(numbers).to.eql(PRIME_NUMBERS)
  })

  it('end of 1st file', () => {
    const numbers = main.getNPrimeNumbers('1000000')
    expect(numbers).to.have.lengthOf(1000000)
    expect(_.last(numbers)).to.equal(config.LAST_PRIME_PER_FILE[1])
  })

  it('start of 2nd file', () => {
    const numbers = main.getNPrimeNumbers('1000001')
    expect(numbers).to.have.lengthOf(1000001)
    expect(_.last(numbers)).to.equal(config.FIRST_PRIME_PER_FILE[2])
  })

  it('last supported prime', () => {
    const numbers = main.getNPrimeNumbers(config.LAST_PRIME_SERIES_IDX)
    expect(numbers).to.have.lengthOf(config.LAST_PRIME_SERIES_IDX)
    expect(_.last(numbers)).to.equal(config.LAST_PRIME)
  })

  it('last supported prime plus 1', () => {
    expect(() => {
      main.getNPrimeNumbers(config.LAST_PRIME_SERIES_IDX + 1)
    }).to.throw(RangeError, `Largest prime index supported is ${config.LAST_PRIME_SERIES_IDX} but ${config.LAST_PRIME_SERIES_IDX + 1} was requested`)
  })

  it('all primes', () => {
    const numbers = main.getNPrimeNumbers()
    expect(numbers).to.have.lengthOf(config.LAST_PRIME_SERIES_IDX)
    expect(_.last(numbers)).to.equal(config.LAST_PRIME)
  })
})
