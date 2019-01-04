const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/is-number-spec')

const seriesKey = config.seriesKeys.tetrahedron

describe('isTetrahedronNumberFast', () => {
  spec(main.isTetrahedronNumberFast, [
    {n: Big('0'), value: true},
    {n: Big('1'), value: true},
    {n: Big('2'), value: false},
    {n: Big('3'), value: false},
    {n: Big('4'), value: true},
    {n: Big('5'), value: false},
    {n: Big('6'), value: false},
    {n: Big('7'), value: false},
    {n: Big('8'), value: false},
    {n: Big('9'), value: false},
    {n: Big('67524'), value: false, testName: seriesKey + '73 minus 1'},
    {n: Big('67525'), value: true, testName: seriesKey + '73'},
    {n: Big('67526'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('166666671666666699999999'), value: false, testName: seriesKey + '100m minus 1'},
    {n: Big('166666671666666700000000'), value: true, testName: seriesKey + '100m'},
    {n: Big('166666671666666700000001'), value: false, testName: seriesKey + '100m plus 1'}
  ])
})
