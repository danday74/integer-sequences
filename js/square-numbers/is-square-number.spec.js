const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/is-number-spec')

describe('isSquareNumber', () => {
  spec(main.isSquareNumber, [Big(1), false, false, Big(2), false], '5328', '5329')
})
