const Big = require('big.js.safe')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('misc', () => {

  describe('examples', () => {

    it('example 1', () => {
      const bigObj = main.getNthPrimeNumber(10)
      const value = bigObj.toFixed()
      expect(value).to.equal('29')
    })

    it('example 2', () => {
      const json = main.getNumbersAsJson(7)
      expect(json).to.eql([
        {number: 1, cube: Big(1), fibonacci: [Big(1), Big(2)], prime: false, triangle: Big(1), square: Big(1)},
        {number: 2, cube: false, fibonacci: Big(3), prime: 1, triangle: false, square: false},
        {number: 3, cube: false, fibonacci: Big(4), prime: 2, triangle: Big(2), square: false},
        {number: 4, cube: false, fibonacci: false, prime: false, triangle: false, square: Big(2)},
        {number: 5, cube: false, fibonacci: Big(5), prime: 3, triangle: false, square: false},
        {number: 6, cube: false, fibonacci: false, prime: false, triangle: Big(3), square: false},
        {number: 7, cube: false, fibonacci: false, prime: 4, triangle: false, square: false}
      ])
    })
  })

  describe('safety', () => {

    it('allows safe integers', () => {
      Big(Number.MAX_SAFE_INTEGER)
      Big(-Number.MAX_SAFE_INTEGER)
    })

    it('throws on unsafe integers', () => {

      expect(() => {
        Big(Number.MAX_SAFE_INTEGER + 1)
      }).to.throw(RangeError, 'Unsafe Integer')

      expect(() => {
        Big(-Number.MAX_SAFE_INTEGER - 1)
      }).to.throw(RangeError, 'Unsafe Integer')
    })
  })
})
