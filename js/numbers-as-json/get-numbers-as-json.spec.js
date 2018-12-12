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

  it('up to 12', () => {

    const EXPECTED = [
      {number: 1, prime: false, triangle: 1, square: 1},
      {number: 2, prime: 1, triangle: false, square: false},
      {number: 3, prime: 2, triangle: 2, square: false},
      {number: 4, prime: false, triangle: false, square: 2},
      {number: 5, prime: 3, triangle: false, square: false},
      {number: 6, prime: false, triangle: 3, square: false},
      {number: 7, prime: 4, triangle: false, square: false},
      {number: 8, prime: false, triangle: false, square: false},
      {number: 9, prime: false, triangle: false, square: 3},
      {number: 10, prime: false, triangle: 4, square: false},
      {number: 11, prime: 5, triangle: false, square: false},
      {number: 12, prime: false, triangle: false, square: false}
    ]

    const numbers = main.getNumbersAsJson(12)
    expect(numbers).to.eql(EXPECTED)
  })

  it('up to 1 million', () => {
    const number = 1000000
    const numbers = main.getNumbersAsJson(number)
    expect(numbers[numbers.length - 1]).to.eql({number: number, prime: false, triangle: false, square: 1000})
  })

  it('up to first prime over 1 million', () => {
    const number = 1000003
    const numbers = main.getNumbersAsJson(number)
    expect(numbers[numbers.length - 1]).to.eql({number: number, prime: 78499, triangle: false, square: false})
  })

  it('smaller after bigger', () => {
    const number = 5
    const numbers = main.getNumbersAsJson(number)
    expect(numbers[numbers.length - 1]).to.eql({number: 5, prime: 3, triangle: false, square: false})
  })
})
