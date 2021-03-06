const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../more/specs/get-term-spec')

const seriesKey = config.seriesKeys.prime

describe('prime.term', () => {
  spec(main.prime.term, seriesKey, [
    {n: Big('0'), value: undefined},
    {n: Big('1'), value: Big('2')},
    {n: Big('2'), value: Big('3')},
    {n: Big('3'), value: Big('5')},
    {n: Big('4'), value: Big('7')},
    {n: Big('5'), value: Big('11')},
    {n: Big('73'), value: Big('367')},
    {n: Big(config.LAST_PRIME_SERIES_IDX), value: Big(config.LAST_PRIME), testName: 'last supported prime'},
    {n: Big(config.LAST_PRIME_SERIES_IDX + 1), value: undefined, testName: 'greater than last supported prime'}
  ])
})
