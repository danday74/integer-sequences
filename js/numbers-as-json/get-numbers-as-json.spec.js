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

  it('negative', () => {
    const number = main.getNumbersAsJson(-1)
    expect(number).to.be.undefined
  })

  it('0', () => {
    const numbers = main.getNumbersAsJson(0)
    expect(numbers).to.eql([])
  })

  it('12', () => {

    const EXPECTED = [
      {number: Big(1), cube: Big(1), fibonacci: [Big(1), Big(2)], padovan: [Big(1), Big(2), Big(3)], prime: false, triangle: Big(1), square: Big(1)},
      {number: Big(2), cube: false, fibonacci: Big(3), padovan: [Big(4), Big(5)], prime: 1, triangle: false, square: false},
      {number: Big(3), cube: false, fibonacci: Big(4), padovan: Big(6), prime: 2, triangle: Big(2), square: false},
      {number: Big(4), cube: false, fibonacci: false, padovan: Big(7), prime: false, triangle: false, square: Big(2)},
      {number: Big(5), cube: false, fibonacci: Big(5), padovan: Big(8), prime: 3, triangle: false, square: false},
      {number: Big(6), cube: false, fibonacci: false, padovan: false, prime: false, triangle: Big(3), square: false},
      {number: Big(7), cube: false, fibonacci: false, padovan: Big(9), prime: 4, triangle: false, square: false},
      {number: Big(8), cube: Big(2), fibonacci: Big(6), padovan: false, prime: false, triangle: false, square: false},
      {number: Big(9), cube: false, fibonacci: false, padovan: Big(10), prime: false, triangle: false, square: Big(3)},
      {number: Big(10), cube: false, fibonacci: false, padovan: false, prime: false, triangle: Big(4), square: false},
      {number: Big(11), cube: false, fibonacci: false, padovan: false, prime: 5, triangle: false, square: false},
      {number: Big(12), cube: false, fibonacci: false, padovan: Big(11), prime: false, triangle: false, square: false}
    ]

    const numbers = main.getNumbersAsJson(12)
    expect(numbers).to.eql(EXPECTED)
  })

  it('1m', () => {
    const number = 1000000
    const numbers = main.getNumbersAsJson(number)
    expect(_.last(numbers)).to.eql({number: Big(number), cube: Big(100), fibonacci: false, padovan: false, prime: false, triangle: false, square: Big(1000)})
  })

  it('first prime over 1m', () => {
    const number = 1000003
    const numbers = main.getNumbersAsJson(Big(number))
    expect(_.last(numbers)).to.eql({number: Big(number), cube: false, fibonacci: false, padovan: false, prime: 78499, triangle: false, square: false})
  })

  it('smaller after bigger', () => {
    const number = 5
    const numbers = main.getNumbersAsJson(number.toString())
    expect(_.last(numbers)).to.eql({number: Big(number), cube: false, fibonacci: Big(5), padovan: Big(8), prime: 3, triangle: false, square: false})
  })
})
