const Big = require('big.js')
const main = require('../..')
const config = require('../../config')
const spec = require('../specs/get-nth-number-spec')

describe('getNthCubeNumber', () => {
  spec(main.getNthCubeNumber, config.seriesKeys.cube, [
    {n: Big('0'), value: undefined},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('8')},
    {n: Big('3'), value: Big('27')},
    {n: Big('4'), value: Big('64')},
    {n: Big('5'), value: Big('125')},
    {n: Big('73'), value: Big('389017')},
    {n: Big('100000000'), value: Big('1000000000000000000000000'), testName: '100m'}
  ])
})
