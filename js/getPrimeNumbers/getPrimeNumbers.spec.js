const chai = require('chai')
const expect = chai.expect

const main = require('../..')
const getHighestPrimeNumber = require('./getHighestPrimeNumber')

const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const PRIME_NUMBERS_FILE = __dirname + '/primeNumbers.md'

describe('getPrimeNumbers', function () {
  this.enableTimeouts(false)

  describe('getHighestPrimeNumber', function () {

    let primeObject

    it('low end', () => {

      primeObject = getHighestPrimeNumber(1, PRIME_NUMBERS)
      expect(primeObject).to.equal(null)

      primeObject = getHighestPrimeNumber(2, PRIME_NUMBERS)
      expect(primeObject).to.eql({highest: 2, idx: 0, array: [2], all: true})

      primeObject = getHighestPrimeNumber(3, PRIME_NUMBERS)
      expect(primeObject).to.eql({highest: 3, idx: 1, array: [2, 3], all: true})

      primeObject = getHighestPrimeNumber(4, PRIME_NUMBERS)
      expect(primeObject).to.eql({highest: 3, idx: 1, array: [2, 3], all: true})
    })

    it('midway', () => {

      primeObject = getHighestPrimeNumber(52, PRIME_NUMBERS)
      expect(primeObject).to.eql({highest: 47, idx: 14, array: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], all: true})

      primeObject = getHighestPrimeNumber(53, PRIME_NUMBERS)
      expect(primeObject).to.eql({highest: 53, idx: 15, array: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53], all: true})

      primeObject = getHighestPrimeNumber(58, PRIME_NUMBERS)
      expect(primeObject).to.eql({highest: 53, idx: 15, array: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53], all: true})
    })

    it('high end', () => {

      primeObject = getHighestPrimeNumber(96, PRIME_NUMBERS)
      expect(primeObject).to.eql({
        highest: 89,
        idx: 23,
        array: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89],
        all: true
      })

      primeObject = getHighestPrimeNumber(97, PRIME_NUMBERS)
      expect(primeObject).to.eql({highest: 97, idx: 24, array: PRIME_NUMBERS, all: false})

      primeObject = getHighestPrimeNumber(10000, PRIME_NUMBERS)
      expect(primeObject).to.eql({highest: 97, idx: 24, array: PRIME_NUMBERS, all: false})
    })

    it('empty', () => {
      primeObject = getHighestPrimeNumber(96, [])
      expect(primeObject).to.equal(null)
    })
  })

  describe('getPrimeNumbers', function () {


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

    const fileTest = (max, primes, filePrimes) => {
      const numbers = main.getPrimeNumbers(max)
      expect(numbers).to.eql(primes)
      const contents = require('fs').readFileSync(PRIME_NUMBERS_FILE, 'utf8')
      const fileNumbers = JSON.parse(`[${contents}]`)
      expect(fileNumbers).to.eql(filePrimes)
    }

    it('file operations', () => {

      const PRIME_NUMBERS_15 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
      const PRIME_NUMBERS_16 = [...PRIME_NUMBERS_15, 53]

      require('fs').writeFileSync(PRIME_NUMBERS_FILE, '')

      fileTest(52, PRIME_NUMBERS_15, PRIME_NUMBERS_15)
      fileTest(52, PRIME_NUMBERS_15, PRIME_NUMBERS_15)
      fileTest(53, PRIME_NUMBERS_16, PRIME_NUMBERS_16)
      fileTest(53, PRIME_NUMBERS_16, PRIME_NUMBERS_16)
      fileTest(54, PRIME_NUMBERS_16, PRIME_NUMBERS_16)
      fileTest(54, PRIME_NUMBERS_16, PRIME_NUMBERS_16)
      fileTest(10, [2, 3, 5, 7], PRIME_NUMBERS_16)
      fileTest(10, [2, 3, 5, 7], PRIME_NUMBERS_16)
    })
  })
})
