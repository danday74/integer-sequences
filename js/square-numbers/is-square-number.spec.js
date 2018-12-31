const Big = require('big.js.safe')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/is-number-spec')

const seriesKey = config.seriesKeys.square

describe('isSquareNumber', () => {
  spec(main.isSquareNumber, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: false},
    {n: Big('3'), value: false},
    {n: Big('4'), value: Big('2')},
    {n: Big('5'), value: false},
    {n: Big('5329'), value: Big('73'), testName: seriesKey + '73'},
    {n: Big('5330'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('10000000000000000'), value: Big('100000000'), testName: seriesKey + '100m'},
    {n: Big('10000000000000001'), value: false, testName: seriesKey + '100m plus 1'}
  ])
})
