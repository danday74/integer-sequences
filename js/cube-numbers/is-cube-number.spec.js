const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/is-number-spec')

const seriesKey = 'C'

describe('isCubeNumber', () => {
  spec(main.isCubeNumber, [
    {n: Big('0'), value: undefined},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: false},
    {n: Big('3'), value: false},
    {n: Big('4'), value: false},
    {n: Big('5'), value: false},
    {n: Big('389017'), value: Big('73'), testName: seriesKey + '73'},
    {n: Big('389018'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('1000000000000000000000000'), value: Big('100000000'), testName: seriesKey + '100m'},
    {n: Big('1000000000000000000000001'), value: false, testName: seriesKey + '100m plus 1'}
  ])
})
