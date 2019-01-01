const Big = require('big.js.safe')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/is-number-spec')

const seriesKey = config.seriesKeys.fibonacci

describe('isFibonacciNumber', () => {
  spec(main.isFibonacciNumber, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('2')}, // and 1!
    {n: Big('2'), value: Big('3')},
    {n: Big('3'), value: Big('4')},
    {n: Big('4'), value: false},
    {n: Big('5'), value: Big('5')},
    {n: Big('806515533049392'), value: false, testName: seriesKey + '73 minus 1'},
    {n: Big('806515533049393'), value: Big('73'), testName: seriesKey + '73'},
    {n: Big('806515533049394'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('222232244629420445529739893461909967206666939096499764990979599'), value: false, testName: seriesKey + '300 minus 1'},
    {n: Big('222232244629420445529739893461909967206666939096499764990979600'), value: Big('300'), testName: seriesKey + '300'},
    {n: Big('222232244629420445529739893461909967206666939096499764990979601'), value: false, testName: seriesKey + '300 plus 1'}
  ])
})
