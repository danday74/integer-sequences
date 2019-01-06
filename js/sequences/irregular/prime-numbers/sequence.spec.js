const _ = require('lodash')
const Big = require('big.js.safe')
const chai = require('chai')
const expect = chai.expect
const main = require('../../../..')
const config = require('../../../../config')

describe('prime.sequence', function () {

  this.enableTimeouts(false)

  // null replaced by all

  it('list n=0', () => {
    const numbers = main.prime.sequence(0)
    expect(numbers).to.eql([])
  })

  it('list n=1', () => {
    const numbers = main.prime.sequence(1)
    expect(numbers).to.eql([2])
  })

  it('list n=2', () => {
    const numbers = main.prime.sequence(2)
    expect(numbers).to.eql([2, 3])
  })

  it('list n=3', () => {
    const numbers = main.prime.sequence(Big(3))
    expect(numbers).to.eql([2, 3, 5])
  })

  it('list n=4', () => {
    const numbers = main.prime.sequence(Big(4))
    expect(numbers).to.eql([2, 3, 5, 7])
  })

  it('list n=5', () => {
    const numbers = main.prime.sequence(Big(5))
    expect(numbers).to.eql([2, 3, 5, 7, 11])
  })

  it('list n=25', () => {
    const numbers = main.prime.sequence('25')
    expect(numbers).to.eql(config.PRIME_NUMBERS_UPTO_100)
  })

  it('list n = end of 1st file', () => {
    const numbers = main.prime.sequence('1000000')
    expect(numbers).to.have.lengthOf(1000000)
    expect(_.last(numbers)).to.equal(config.LAST_PRIME_PER_FILE[1])
  })

  it('list n = start of 2nd file', () => {
    const numbers = main.prime.sequence('1000001')
    expect(numbers).to.have.lengthOf(1000001)
    expect(_.last(numbers)).to.equal(config.FIRST_PRIME_PER_FILE[2])
  })

  it('list n = last supported prime', () => {
    const numbers = main.prime.sequence(config.LAST_PRIME_SERIES_IDX)
    expect(numbers).to.have.lengthOf(config.LAST_PRIME_SERIES_IDX)
    expect(_.last(numbers)).to.equal(config.LAST_PRIME)
  })

  it('list n = last supported prime plus 1', () => {
    expect(() => {
      main.prime.sequence(config.LAST_PRIME_SERIES_IDX + 1)
    }).to.throw(RangeError, `Largest prime index supported is ${config.LAST_PRIME_SERIES_IDX} but ${config.LAST_PRIME_SERIES_IDX + 1} was requested`)
  })

  it('list all primes', () => {
    const numbers = main.prime.sequence()
    expect(numbers).to.have.lengthOf(config.LAST_PRIME_SERIES_IDX)
    expect(_.last(numbers)).to.equal(config.LAST_PRIME)
  })
})
