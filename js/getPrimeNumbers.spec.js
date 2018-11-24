const chai = require('chai')
const expect = chai.expect

const main = require('../index')

describe('getPrimeNumbers', function () {

  this.enableTimeouts(false)

  it('up to 100', () => {

    const EXPECTED = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    let numbers

    numbers = main.getPrimeNumbers(100)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getPrimeNumbers(97)
    expect(numbers).to.have.lengthOf(EXPECTED.length)

    numbers = main.getPrimeNumbers(96)
    expect(numbers).to.have.lengthOf(EXPECTED.length - 1)
  })

  it('up to 20000', () => {

    console.time('primes')
    main.getPrimeNumbers(20000)
    console.timeEnd('primes')
  })
})
