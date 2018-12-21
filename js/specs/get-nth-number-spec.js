const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect

module.exports = (numberFunc, seriesKey, expected) => {

  it('null', () => {
    const number = numberFunc()
    expect(number).to.be.undefined
  })

  it(seriesKey + '0', () => {
    const number = numberFunc(0)
    expect(number).to.be.undefined
  })

  it(seriesKey + '1', () => {
    const number = numberFunc(1)
    expect(number).to.eql(expected[0])
  })

  it(seriesKey + '2', () => {
    const number = numberFunc(2)
    expect(number).to.eql(expected[1])
  })

  it(seriesKey + '3', () => {
    const number = numberFunc(Big(3))
    expect(number).to.eql(expected[2])
  })

  it(seriesKey + '4', () => {
    const number = numberFunc(Big(4))
    expect(number).to.eql(expected[3])
  })

  it(seriesKey + '5', () => {
    const number = numberFunc('5')
    expect(number).to.eql(expected[4])
  })

  it(seriesKey + '73', () => {
    const number = numberFunc('73')
    expect(number).to.eql(expected[5])
  })
}
