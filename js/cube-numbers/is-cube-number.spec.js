const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/is-number-spec')

describe('isCubeNumber', () => {
  spec(main.isCubeNumber, [Big(1), false, false, false, false], '389016', '389017')
})
