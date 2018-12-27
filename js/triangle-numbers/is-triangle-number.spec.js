const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/is-number-spec')

describe('isTriangleNumber', () => {
  spec(main.isTriangleNumber, 'T', [Big('1'), false, Big('2'), false, false], Big('2701'), Big('5000000050000000'))
})
