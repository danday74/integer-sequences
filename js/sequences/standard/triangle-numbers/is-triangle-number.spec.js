const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/is-number-spec')

const seriesKey = config.seriesKeys.triangle

describe('isTriangleNumber', () => {
  spec(main.isTriangleNumber, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: false},
    {n: Big('3'), value: Big('2')},
    {n: Big('4'), value: false},
    {n: Big('5'), value: false},
    {n: Big('6'), value: Big('3')},
    {n: Big('7'), value: false},
    {n: Big('8'), value: false},
    {n: Big('9'), value: false},
    {n: Big('2700'), value: false, testName: seriesKey + '73 minus 1'},
    {n: Big('2701'), value: Big('73'), testName: seriesKey + '73'},
    {n: Big('2702'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('5000000049999999'), value: false, testName: seriesKey + '100m minus 1'},
    {n: Big('5000000050000000'), value: Big('100000000'), testName: seriesKey + '100m'},
    {n: Big('5000000050000001'), value: false, testName: seriesKey + '100m plus 1'}
  ])
})
