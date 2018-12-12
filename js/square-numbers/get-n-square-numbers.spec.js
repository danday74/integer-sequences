const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('getNSquareNumbers', () => {

  it('null', () => {
    const numbers = main.getNSquareNumbers()
    expect(numbers).to.eql([])
  })

  it('10', () => {
    const EXPECTED = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    const numbers = main.getNSquareNumbers(10)
    expect(numbers).to.eql(EXPECTED)
  })

  it('10 mill', () => {
    main.getNSquareNumbers(10000000)
  })
})
