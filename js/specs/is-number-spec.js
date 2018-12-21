const Big = require('big.js')
const chai = require('chai')
const expect = chai.expect

module.exports = (numberFunc, expected, str73Minus1, str73) => {

  it('null', () => {
    const seriesIdx = numberFunc()
    expect(seriesIdx).to.be.undefined
  })

  it('0', () => {
    const seriesIdx = numberFunc(0)
    expect(seriesIdx).to.be.undefined
  })

  it('1', () => {
    const seriesIdx = numberFunc(1)
    expect(seriesIdx).to.eql(expected[0])
  })

  it('2', () => {
    const seriesIdx = numberFunc(2)
    expect(seriesIdx).to.eql(expected[1])
  })

  it('3', () => {
    const seriesIdx = numberFunc(Big(3))
    expect(seriesIdx).to.eql(expected[2])
  })

  it('4', () => {
    const seriesIdx = numberFunc(Big(4))
    expect(seriesIdx).to.eql(expected[3])
  })

  it('5', () => {
    const seriesIdx = numberFunc(Big(5))
    expect(seriesIdx).to.eql(expected[4])
  })

  it(str73Minus1, () => {
    const seriesIdx = numberFunc(str73Minus1)
    expect(seriesIdx).to.equal(false)
  })

  it(str73, () => {
    const seriesIdx = numberFunc(str73)
    expect(seriesIdx).to.eql(Big(73))
  })
}
