const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')
const config = require('../../config')

describe('getPrimeNumbers', function () {

  this.enableTimeouts(false)

  // null replaced by all

  it('list 0', () => {
    const numbers = main.getPrimeNumbers(0)
    expect(numbers).to.eql([])
  })

  it('list 1', () => {
    const numbers = main.getPrimeNumbers(1)
    expect(numbers).to.eql([])
  })

  it('list 2', () => {
    const numbers = main.getPrimeNumbers(Big(2))
    expect(numbers).to.eql([2])
  })

  it('list 3', () => {
    const numbers = main.getPrimeNumbers(Big(3))
    expect(numbers).to.eql([2, 3])
  })

  it('list 4', () => {
    const numbers = main.getPrimeNumbers('4')
    expect(numbers).to.eql([2, 3])
  })

  it('list 5', () => {
    const numbers = main.getPrimeNumbers('5')
    expect(numbers).to.eql([2, 3, 5])
  })

  it('list 100', () => {

    const EXPECTED = config.PRIME_NUMBERS_UPTO_100
    let numbers

    numbers = main.getPrimeNumbers(100)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getPrimeNumbers(Big(97))
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getPrimeNumbers('96')
    expect(numbers).to.have.lengthOf(EXPECTED.length - 1)
  })

  it('list end of 1st file', () => {

    let numbers

    numbers = main.getPrimeNumbers(config.LAST_PRIME_PER_FILE[1])
    expect(numbers).to.have.lengthOf(1000000)
  })

  it('list start of 2nd file (before first prime)', () => {

    let numbers

    numbers = main.getPrimeNumbers(config.LAST_PRIME_PER_FILE[1] + 1)
    expect(numbers).to.have.lengthOf(1000000)
  })

  it('list start of 2nd file (first prime)', () => {

    let numbers

    numbers = main.getPrimeNumbers(config.FIRST_PRIME_PER_FILE[2])
    expect(numbers).to.have.lengthOf(1000001)
  })

  it('list last supported prime', () => {

    const numbers = main.getPrimeNumbers(config.LAST_PRIME)
    expect(numbers).to.have.lengthOf(config.LAST_PRIME_SERIES_IDX)
    expect(_.last(numbers)).to.equal(config.LAST_PRIME)
  })

  it('list greater than last supported prime', () => {

    expect(() => {
      main.getPrimeNumbers(config.LAST_PRIME + 1)
    }).to.throw(RangeError, `Largest prime supported is ${config.LAST_PRIME} but ${config.LAST_PRIME + 1} was requested`)
  })

  it('list all primes', () => {

    const numbers = main.getPrimeNumbers()
    expect(numbers).to.have.lengthOf(config.LAST_PRIME_SERIES_IDX)
    expect(_.last(numbers)).to.equal(config.LAST_PRIME)
  })
})
