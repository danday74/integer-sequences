const Big = require('big.js.safe')
const chai = require('chai')
const expect = chai.expect
const intseqs = require('../../..')

describe('misc', () => {

  describe('examples', () => {

    it('example 1', () => {
      const bigObj = intseqs.prime.term(10)
      const value = bigObj.toFixed()
      expect(value).to.equal('29')
    })

    it('example 2', () => {
      const json = intseqs.getNumbersAsJson(7)
      expect(json).to.eql([
        {
          number: 1,
          cube: Big(1),
          fibonacci: [Big(1), Big(2)],
          padovan: [Big(1), Big(2), Big(3)],
          prime: false,
          tetrahedron: Big(1),
          triangle: Big(1),
          square: Big(1)
        },
        {number: 2, cube: false, fibonacci: Big(3), padovan: [Big(4), Big(5)], prime: 1, tetrahedron: false, triangle: false, square: false},
        {number: 3, cube: false, fibonacci: Big(4), padovan: Big(6), prime: 2, tetrahedron: false, triangle: Big(2), square: false},
        {number: 4, cube: false, fibonacci: false, padovan: Big(7), prime: false, tetrahedron: Big(2), triangle: false, square: Big(2)},
        {number: 5, cube: false, fibonacci: Big(5), padovan: Big(8), prime: 3, tetrahedron: false, triangle: false, square: false},
        {number: 6, cube: false, fibonacci: false, padovan: false, prime: false, tetrahedron: false, triangle: Big(3), square: false},
        {number: 7, cube: false, fibonacci: false, padovan: Big(9), prime: 4, tetrahedron: false, triangle: false, square: false}
      ])
    })
  })

  describe('safety', () => {

    it('allows safe integers', () => {
      Big(Number.MAX_SAFE_INTEGER)
      Big(-Number.MAX_SAFE_INTEGER)
    })

    it('throws on unsafe integers', () => {

      expect(() => {
        Big(Number.MAX_SAFE_INTEGER + 1)
      }).to.throw(RangeError, 'Unsafe Integer')

      expect(() => {
        Big(-Number.MAX_SAFE_INTEGER - 1)
      }).to.throw(RangeError, 'Unsafe Integer')
    })
  })
})
