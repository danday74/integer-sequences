const chai = require('chai')
const expect = chai.expect

const main = require('../..')

describe('getTriangleNumbers', () => {

  it('null', () => {
    const numbers = main.getTriangleNumbers()
    expect(numbers).to.eql([])
  })

  it('up to 100', () => {

    const EXPECTED = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91]
    let numbers

    numbers = main.getTriangleNumbers(100)
    expect(numbers).to.eql(EXPECTED)

    numbers = main.getTriangleNumbers(91)
    expect(numbers).to.have.lengthOf(EXPECTED.length)

    numbers = main.getTriangleNumbers(90)
    expect(numbers).to.have.lengthOf(EXPECTED.length - 1)
  })

  it('up to 100 mill', () => {
    main.getTriangleNumbers(100000000)
  })
})
