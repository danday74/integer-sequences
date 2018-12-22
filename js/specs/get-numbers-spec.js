const _ = require('lodash')
const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect

module.exports = (numberFunc, upTo100, expected100Mill) => {

  const last100 = _.last(upTo100)
  const strNoDrop = last100.toString()
  const strDrop = (last100 - 1).toString()

  it('null', () => {
    const numbers = numberFunc()
    expect(numbers).to.eql([])
  })

  it('list 0', () => {
    const numbers = numberFunc(0)
    expect(numbers).to.eql([])
  })

  it('list 100', () => {

    let numbers

    numbers = numberFunc(100)
    expect(numbers).to.eql(upTo100)

    numbers = numberFunc(Big(100))
    expect(numbers).to.eql(upTo100)

    numbers = numberFunc(strNoDrop)
    expect(numbers).to.have.lengthOf(upTo100.length)

    numbers = numberFunc(strDrop)
    expect(numbers).to.have.lengthOf(upTo100.length - 1)
  })

  it('list 100m', () => {
    const numbers = numberFunc('100000000')
    expect(_.last(numbers)).to.eql(expected100Mill)
  })
}
