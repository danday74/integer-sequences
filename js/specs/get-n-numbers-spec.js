const _ = require('lodash')
const Big = require('big.js.safe')
const chai = require('chai')
const expect = chai.expect

module.exports = (numberFunc, upTo100, expected) => {

  const upTo100Count = upTo100.length
  const strN = expected.n.toFixed()
  const testName = expected.testName ? 'list n=' + expected.testName : 'list n=' + strN

  it('null', () => {
    const numbers = numberFunc()
    expect(numbers).to.eql([])
  })

  it('negative', () => {
    const numbers = numberFunc(-1)
    expect(numbers).to.be.undefined
  })

  it('list n=0', () => {
    const numbers = numberFunc(0)
    expect(numbers).to.eql([])
  })

  it('list n=' + upTo100Count, () => {
    let numbers

    numbers = numberFunc(upTo100Count)
    expect(numbers).to.eql(upTo100)

    numbers = numberFunc(Big(upTo100Count))
    expect(numbers).to.eql(upTo100)
  })

  it(testName, () => {
    const numbers = numberFunc(strN)
    expect(_.last(numbers)).to.eql(expected.value)
  })
}
