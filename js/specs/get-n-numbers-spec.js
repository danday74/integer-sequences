const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect

module.exports = (numberFunc, upTo100Count, upTo100, expected1Mill) => {

  it('null', () => {
    const numbers = numberFunc()
    expect(numbers).to.eql([])
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

  it('list n=1m', () => {
    const numbers = numberFunc('1000000')
    expect(_.last(numbers)).to.eql(expected1Mill)
  })
}
