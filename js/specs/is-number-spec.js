const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect

module.exports = (numberFunc, expecteds) => {

  it('null', () => {
    const seriesIdx = numberFunc()
    expect(seriesIdx).to.be.undefined
  })

  it('negative', () => {
    const seriesIdx = numberFunc(Big(-1))
    expect(seriesIdx).to.be.undefined
  })

  for (let i = 0; i < expecteds.length; i++) {

    const expected = expecteds[i]
    const n = expected.n

    let input = n
    if (i % 3 === 1) input = n.toFixed() // test string
    if (i % 3 === 2 && n.lte(Number.MAX_SAFE_INTEGER)) input = parseInt(n.toFixed()) // test number

    const testName = expected.testName ? expected.testName : n.toFixed()
    it(testName, () => {
      const number = numberFunc(input)
      expect(number).to.eql(expected.value)
    })
  }
}
