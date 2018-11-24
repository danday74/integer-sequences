const chai = require('chai')
const expect = chai.expect

const main = require('../index')

describe('getTriangleNumbers', () => {
  it('up to 100', () => {
    const triangleNumbers = main.getTriangleNumbers(100)
    expect(triangleNumbers).to.eql([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91])
  })
})
