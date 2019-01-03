const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../other/specs/is-number-spec')

const seriesKey = config.seriesKeys.prime

describe('isPrimeNumberFast', () => {
  spec(main.isPrimeNumberFast, [
    {n: Big('0'), value: undefined},
    {n: Big('1'), value: false},
    {n: Big('2'), value: true},
    {n: Big('3'), value: true},
    {n: Big('4'), value: false},
    {n: Big('5'), value: true},
    {n: Big('6'), value: false},
    {n: Big('7'), value: true},
    {n: Big('8'), value: false},
    {n: Big('9'), value: false},
    {n: Big('366'), value: false, testName: seriesKey + '73 minus 1'},
    {n: Big('367'), value: true, testName: seriesKey + '73'},
    {n: Big('368'), value: false, testName: seriesKey + '73 plus 1'},
    {n: Big(config.LAST_PRIME), value: true, testName: 'last supported prime'},
    {n: Big(config.LAST_PRIME + 1), value: false, testName: 'greater than last supported prime (not prime)'},
    {n: Big(config.NEXT_PRIME_AFTER_LAST), value: true, testName: 'greater than last supported prime (prime)'}
  ])
})
