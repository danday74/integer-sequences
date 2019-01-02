const Big = require('big.js.safe')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/get-nth-number-spec')

const seriesKey = config.seriesKeys.padovan

describe('getNthPadovanNumber', () => {
  spec(main.getNthPadovanNumber, seriesKey, [
    {n: Big('0'), value: Big('1')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('1')},
    {n: Big('3'), value: Big('2')},
    {n: Big('4'), value: Big('2')},
    {n: Big('5'), value: Big('3')},
    {n: Big('73'), value: Big('593775046')},
    {n: Big('300'), value: Big('3130682771700669235801263856746915736')}
  ])
})
