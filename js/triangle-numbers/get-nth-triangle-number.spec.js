const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/get-nth-number-spec')

describe('getNthTriangleNumber', () => {
  spec(main.getNthTriangleNumber, 'T', [Big(1), Big(3), Big(6), Big(10), Big(15), Big(2701)])
})
