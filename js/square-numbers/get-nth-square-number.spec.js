const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/get-nth-number-spec')

describe('getNthSquareNumber', () => {
  spec(main.getNthSquareNumber, 'S', [Big('1'), Big('4'), Big('9'), Big('16'), Big('25'), Big('5329')])
})
