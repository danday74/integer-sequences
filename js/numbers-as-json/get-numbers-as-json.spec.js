const _ = require('lodash')
const Big = require('big.js.safe')
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
      {number: 1, cube: Big(1), fibonacci: [Big(1), Big(2)], prime: false, triangle: Big(1), square: Big(1)},
      {number: 2, cube: false, fibonacci: Big(3), prime: 1, triangle: false, square: false},
      {number: 3, cube: false, fibonacci: Big(4), prime: 2, triangle: Big(2), square: false},
      {number: 4, cube: false, fibonacci: false, prime: false, triangle: false, square: Big(2)},
      {number: 5, cube: false, fibonacci: Big(5), prime: 3, triangle: false, square: false},
      {number: 6, cube: false, fibonacci: false, prime: false, triangle: Big(3), square: false},
      {number: 7, cube: false, fibonacci: false, prime: 4, triangle: false, square: false},
      {number: 8, cube: Big(2), fibonacci: Big(6), prime: false, triangle: false, square: false},
      {number: 9, cube: false, fibonacci: false, prime: false, triangle: false, square: Big(3)},
      {number: 10, cube: false, fibonacci: false, prime: false, triangle: Big(4), square: false},
      {number: 11, cube: false, fibonacci: false, prime: 5, triangle: false, square: false},
      {number: 12, cube: false, fibonacci: false, prime: false, triangle: false, square: false}
    ]

    const numbers = main.getNumbersAsJson(12)
    expect(numbers).to.eql(EXPECTED)
  })

  it('1m', () => {
    const number = 1000000
    const numbers = main.getNumbersAsJson(number)
    expect(_.last(numbers)).to.eql({number, cube: Big(100), fibonacci: false, prime: false, triangle: false, square: Big(1000)})
  })

  it('first prime over 1m', () => {
    const number = 1000003
    const numbers = main.getNumbersAsJson(Big(number))
    expect(_.last(numbers)).to.eql({number, cube: false, fibonacci: false, prime: 78499, triangle: false, square: false})
  })

  it('smaller after bigger', () => {
    const number = 5
    const numbers = main.getNumbersAsJson(number.toString())
    expect(_.last(numbers)).to.eql({number, cube: false, fibonacci: Big(5), prime: 3, triangle: false, square: false})
  })
})
