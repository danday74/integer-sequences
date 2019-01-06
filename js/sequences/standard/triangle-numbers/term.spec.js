const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-term-spec')

const seriesKey = config.seriesKeys.triangle

describe('triangle.term', () => {
  spec(main.triangle.term, seriesKey, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('3')},
    {n: Big('3'), value: Big('6')},
    {n: Big('4'), value: Big('10')},
    {n: Big('5'), value: Big('15')},
    {n: Big('73'), value: Big('2701')},
    {n: Big('100000000'), value: Big('5000000050000000'), testName: seriesKey + '100m'}
  ])
})
