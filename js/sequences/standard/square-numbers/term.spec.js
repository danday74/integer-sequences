const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-term-spec')

const seriesKey = config.seriesKeys.square

describe('square.term', () => {
  spec(main.square.term, seriesKey, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('4')},
    {n: Big('3'), value: Big('9')},
    {n: Big('4'), value: Big('16')},
    {n: Big('5'), value: Big('25')},
    {n: Big('73'), value: Big('5329')},
    {n: Big('100000000'), value: Big('10000000000000000'), testName: seriesKey + '100m'}
  ])
})
