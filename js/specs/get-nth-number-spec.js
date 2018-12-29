const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect

module.exports = (numberFunc, seriesKey, expecteds) => {

  it('null', () => {
    const number = numberFunc()
    expect(number).to.be.undefined
  })

  it('negative', () => {
    const number = numberFunc(Big(-1))
    expect(number).to.be.undefined
  })

  for (let i = 0; i < expecteds.length; i++) {

    const expected = expecteds[i]
    const n = expected.n

    let input = n
    if (i % 3 === 1) input = n.toFixed() // test string
    if (i % 3 === 2 && n.lte(Number.MAX_SAFE_INTEGER)) input = parseInt(n.toFixed()) // test number

    const testName = expected.testName ? expected.testName : seriesKey + n
    it(testName, () => {
      const number = numberFunc(input)
      expect(number).to.eql(expected.value)
    })
  }
}
