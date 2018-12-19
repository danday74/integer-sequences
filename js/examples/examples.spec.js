const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('examples', () => {

  it('example 1', () => {
    const bigObj = main.getNthPrimeNumber(10)
    const value = bigObj.toFixed()
    expect(value).to.equal('29')
  })

  it('example 2', () => {
    const json = main.getNumbersAsJson(7)
    expect(json).to.eql([
      {number: 1, prime: false, triangle: Big(1), square: Big(1)},
      {number: 2, prime: 1, triangle: false, square: false},
      {number: 3, prime: 2, triangle: Big(2), square: false},
      {number: 4, prime: false, triangle: false, square: Big(2)},
      {number: 5, prime: 3, triangle: false, square: false},
      {number: 6, prime: false, triangle: Big(3), square: false},
      {number: 7, prime: 4, triangle: false, square: false}
    ])
  })
})
