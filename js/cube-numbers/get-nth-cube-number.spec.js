const Big = require('big.js.safe')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/get-nth-number-spec')

const seriesKey = config.seriesKeys.cube

describe('getNthCubeNumber', () => {
  spec(main.getNthCubeNumber, seriesKey, [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('8')},
    {n: Big('3'), value: Big('27')},
    {n: Big('4'), value: Big('64')},
    {n: Big('5'), value: Big('125')},
    {n: Big('73'), value: Big('389017')},
    {n: Big('100000000'), value: Big('1000000000000000000000000'), testName: seriesKey + '100m'}
  ])
})
