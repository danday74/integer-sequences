const Big = require('big.js.safe')
const main = require('../../../..')
const config = require('../../../../config')
const spec = require('../../../other/specs/get-nth-number-spec')

const seriesKey = config.seriesKeys.padovan

describe('getNthPadovanNumber', () => {
  spec(main.getNthPadovanNumber, seriesKey, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('1')},
    {n: Big('3'), value: Big('1')},
    {n: Big('4'), value: Big('2')},
    {n: Big('5'), value: Big('2')},
    {n: Big('73'), value: Big('448227521')},
    {n: Big('300'), value: Big('2363282504460128817149946336533734471')}
  ])
})
