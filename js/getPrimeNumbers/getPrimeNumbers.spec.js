const chai = require('chai')
const expect = chai.expect
const main = require('../..')

const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const LAST_PRIME_NUMBER = 104395301

describe('getPrimeNumbers', function () {

  this.enableTimeouts(false)

  it('up to 1', () => {
    const numbers = main.getPrimeNumbers(1)
    expect(numbers).to.eql([])
  })

  it('up to 2', () => {
    const numbers = main.getPrimeNumbers(2)
    expect(numbers).to.eql([2])
  })

  it('up to 3', () => {
    const numbers = main.getPrimeNumbers(3)
    expect(numbers).to.eql([2, 3])
  })

  it('up to 4', () => {
    const numbers = main.getPrimeNumbers(4)
    expect(numbers).to.eql([2, 3])
  })

  it('up to 5', () => {
    const numbers = main.getPrimeNumbers(5)
    expect(numbers).to.eql([2, 3, 5])
  })

  it('up to 100', () => {

    let numbers

    numbers = main.getPrimeNumbers(100)
    expect(numbers).to.eql(PRIME_NUMBERS)

    numbers = main.getPrimeNumbers(97)
    expect(numbers).to.have.lengthOf(PRIME_NUMBERS.length)

    numbers = main.getPrimeNumbers(96)
    expect(numbers).to.have.lengthOf(PRIME_NUMBERS.length - 1)
  })

  it('up to last supported prime number', () => {

    const numbers = main.getPrimeNumbers(LAST_PRIME_NUMBER)
    expect(numbers).to.have.lengthOf(6000000)
    expect(numbers[numbers.length - 1]).to.equal(LAST_PRIME_NUMBER)
  })

  it('greater than last supported prime number', () => {

    expect(() => {
      main.getPrimeNumbers(LAST_PRIME_NUMBER + 1)
    }).to.throw(RangeError)
  })

  // TODO: Add checks to ensure primes are correct
  // TODO: More tests, checking boundaries
  // TODO: Add 50 files?
})
