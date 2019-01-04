const _ = require('lodash')
const Big = require('big.js.safe')
const chai = require('chai')
const expect = chai.expect
const main = require('../..')

describe('getNumberAsJson', function () {

  this.enableTimeouts(false)

  it('null', () => {
    const number = main.getNumberAsJson()
    expect(number).to.be.undefined
  })

  it('negative', () => {
    const number = main.getNumberAsJson(-1)
    expect(number).to.be.undefined
  })

  it('0', () => {
    const number = main.getNumberAsJson(0)
    expect(number).to.eql({
      number: Big(0),
      cube: Big(0),
      fibonacci: Big(0),
      padovan: Big(0),
      prime: undefined,
      square: Big(0),
      tetrahedron: Big(0),
      triangle: Big(0)
    })
  })

  const MAX = 12
  const numbers = main.getNumbersAsJson(MAX)

  for (let i = 1; i <= MAX; i++) {
    it(i.toString(), () => {
      const actual = main.getNumberAsJson(i)
      const expected = _.cloneDeep(numbers[i - 1])
      expected.number = Big(expected.number)
      if (expected.prime) expected.prime = Big(expected.prime)
      expect(actual).to.eql(expected)
    })
  }

  it('100m', () => {
    const number = main.getNumberAsJson(100000000)
    expect(number).to.eql({
      number: Big(100000000),
      cube: false,
      fibonacci: false,
      padovan: false,
      prime: false,
      square: Big(10000),
      tetrahedron: false,
      triangle: false
    })
  })
})
