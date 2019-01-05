const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/is-number-spec')

const seriesKey = config.seriesKeys.padovan

describe('padovan.isTerm', () => {
  spec(main.padovan.isTerm, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: [Big('1'), Big('2'), Big('3')]},
    {n: Big('2'), value: [Big('4'), Big('5')]},
    {n: Big('3'), value: Big('6')},
    {n: Big('4'), value: Big('7')},
    {n: Big('5'), value: Big('8')},
    {n: Big('6'), value: false},
    {n: Big('7'), value: Big('9')},
    {n: Big('8'), value: false},
    {n: Big('9'), value: Big('10')},
    {n: Big('448227520'), value: false, testName: seriesKey + '73 minus 1'},
    {n: Big('448227521'), value: Big('73'), testName: seriesKey + '73'},
    {n: Big('448227522'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big('2363282504460128817149946336533734470'), value: false, testName: seriesKey + '300 minus 1'},
    {n: Big('2363282504460128817149946336533734471'), value: Big('300'), testName: seriesKey + '300'},
    {n: Big('2363282504460128817149946336533734472'), value: false, testName: seriesKey + '300 plus 1'}
  ])
})
