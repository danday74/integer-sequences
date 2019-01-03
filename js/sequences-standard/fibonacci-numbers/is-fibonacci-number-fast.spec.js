const Big = require('big.js.safe')
const main = require('../../..')
const config = require('../../../config')
const spec = require('../../other/specs/is-number-spec')

const seriesKey = config.seriesKeys.fibonacci

describe('isFibonacciNumberFast', () => {
  spec(main.isFibonacciNumberFast, [
    {n: Big('0'), value: true},
    {n: Big('1'), value: true},
    {n: Big('2'), value: true},
    {n: Big('3'), value: true},
    {n: Big('4'), value: false},
    {n: Big('5'), value: true},
    {n: Big('6'), value: false},
    {n: Big('7'), value: false},
    {n: Big('8'), value: true},
    {n: Big('9'), value: false},
    {n: Big('806515533049392'), value: false, testName: seriesKey + '73 minus 1'},
    {n: Big('806515533049393'), value: true, testName: seriesKey + '73'},
    {n: Big('806515533049394'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('222232244629420445529739893461909967206666939096499764990979599'), value: false, testName: seriesKey + '300 minus 1'},
    {n: Big('222232244629420445529739893461909967206666939096499764990979600'), value: true, testName: seriesKey + '300'},
    {n: Big('222232244629420445529739893461909967206666939096499764990979601'), value: false, testName: seriesKey + '300 plus 1'}
  ])
})
