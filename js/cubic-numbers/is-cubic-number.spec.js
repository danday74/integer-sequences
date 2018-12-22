const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/is-number-spec')

describe('isCubicNumber', () => {
  spec(main.isCubicNumber, [Big(1), false, false, false, false], '389016', '389017')
})
