const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('getNTriangleNumbers', () => {

  it('null', () => {
    const numbers = main.getNTriangleNumbers()
    expect(numbers).to.eql([])
  })

  it('13', () => {
    const EXPECTED = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91]
    const numbers = main.getNTriangleNumbers(13)
    expect(numbers).to.eql(EXPECTED)
  })

  it('10 mill', () => {
    main.getNTriangleNumbers(10000000)
  })
})
