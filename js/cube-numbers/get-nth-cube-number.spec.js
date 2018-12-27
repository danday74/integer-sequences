const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/get-nth-number-spec')

describe('getNthCubeNumber', () => {
  spec(main.getNthCubeNumber, 'C', [Big('1'), Big('8'), Big('27'), Big('64'), Big('125'), Big('389017'), Big('1000000000000000000000000')])
})
