const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getSquareNumbers', () => {

  it('null', () => {
    const numbers = main.getSquareNumbers()
    expect(numbers).to.have.lengthOf(0)
  })

  it('up to 100', () => {

    const EXPECTED = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    let numbers

    numbers = main.getSquareNumbers(100)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getSquareNumbers(99)
    expect(numbers).to.have.lengthOf(EXPECTED.length - 1)
  })

  it('up to 100 mill', () => {
    main.getSquareNumbers(100000000)
  })
})
