const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/is-number-spec')

describe('isCubeNumber', () => {
  spec(main.isCubeNumber, 'C', [Big('1'), false, false, false, false], Big('389017'), Big('1000000000000000000000000'))
})
