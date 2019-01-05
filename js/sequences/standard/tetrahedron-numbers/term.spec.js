const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-nth-number-spec')

const seriesKey = config.seriesKeys.tetrahedron

describe('tetrahedron.term', () => {
  spec(main.tetrahedron.term, seriesKey, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('4')},
    {n: Big('3'), value: Big('10')},
    {n: Big('4'), value: Big('20')},
    {n: Big('5'), value: Big('35')},
    {n: Big('73'), value: Big('67525')},
    {n: Big('100000000'), value: Big('166666671666666700000000'), testName: seriesKey + '100m'}
  ])
})
