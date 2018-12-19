const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('getNumbersAsJson', function () {

  this.enableTimeouts(false)

  it('null', () => {
    const numbers = main.getNumbersAsJson()
    expect(numbers).to.eql([])
  })

  it('0', () => {
    const numbers = main.getNumbersAsJson(0)
    expect(numbers).to.eql([])
  })

  it('12', () => {

    const EXPECTED = [
      {number: 1, prime: false, triangle: Big(1), square: Big(1)},
      {number: 2, prime: 1, triangle: false, square: false},
      {number: 3, prime: 2, triangle: Big(2), square: false},
      {number: 4, prime: false, triangle: false, square: Big(2)},
      {number: 5, prime: 3, triangle: false, square: false},
      {number: 6, prime: false, triangle: Big(3), square: false},
      {number: 7, prime: 4, triangle: false, square: false},
      {number: 8, prime: false, triangle: false, square: false},
      {number: 9, prime: false, triangle: false, square: Big(3)},
      {number: 10, prime: false, triangle: Big(4), square: false},
      {number: 11, prime: 5, triangle: false, square: false},
      {number: 12, prime: false, triangle: false, square: false}
    ]

    const numbers = main.getNumbersAsJson(12)
    expect(numbers).to.eql(EXPECTED)
  })

  it('1m', () => {
    const number = 1000000
    const numbers = main.getNumbersAsJson(number)
    expect(_.last(numbers)).to.eql({number, prime: false, triangle: false, square: Big(1000)})
  })

  it('first prime over 1m', () => {
    const number = 1000003
    const numbers = main.getNumbersAsJson(Big(number))
    expect(_.last(numbers)).to.eql({number, prime: 78499, triangle: false, square: false})
  })

  it('smaller after bigger', () => {
    const number = 5
    const numbers = main.getNumbersAsJson(number.toString())
    expect(_.last(numbers)).to.eql({number, prime: 3, triangle: false, square: false})
  })
})
