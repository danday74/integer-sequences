const chai = require('chai')
const expect = chai.expect

const main = require('../index')

describe('getSquareNumbers', () => {
  it('up to 100', () => {
    const triangleNumbers = main.getSquareNumbers(100)
    expect(triangleNumbers).to.eql([1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
  })
})
