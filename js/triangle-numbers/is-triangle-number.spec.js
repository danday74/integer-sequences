const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/is-number-spec')

const seriesKey = 'T'

describe('isTriangleNumber', () => {
  spec(main.isTriangleNumber, [
    {n: Big('0'), value: undefined},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: false},
    {n: Big('3'), value: Big('2')},
    {n: Big('4'), value: false},
    {n: Big('5'), value: false},
    {n: Big('2701'), value: Big('73'), testName: seriesKey + '73'},
    {n: Big('2702'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('5000000050000000'), value: Big('100000000'), testName: seriesKey + '100m'},
    {n: Big('5000000050000001'), value: false, testName: seriesKey + '100m plus 1'}
  ])
})
