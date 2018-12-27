const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/is-number-spec')

describe('isSquareNumber', () => {
  spec(main.isSquareNumber, 'S', [Big('1'), false, false, Big('2'), false], Big('5329'), Big('10000000000000000'))
})
