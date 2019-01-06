const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-is-term-spec')

const seriesKey = config.seriesKeys.tetrahedron

describe('tetrahedron.isTerm', () => {
  spec(main.tetrahedron.isTerm, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: false},
    {n: Big('3'), value: false},
    {n: Big('4'), value: Big('2')},
    {n: Big('5'), value: false},
    {n: Big('6'), value: false},
    {n: Big('7'), value: false},
    {n: Big('8'), value: false},
    {n: Big('9'), value: false},
    {n: Big('67524'), value: false, testName: seriesKey + '73 minus 1'},
    {n: Big('67525'), value: Big('73'), testName: seriesKey + '73'},
    {n: Big('67526'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('166666671666666699999999'), value: false, testName: seriesKey + '100m minus 1'},
    {n: Big('166666671666666700000000'), value: Big('100000000'), testName: seriesKey + '100m'},
    {n: Big('166666671666666700000001'), value: false, testName: seriesKey + '100m plus 1'}
  ])
})
