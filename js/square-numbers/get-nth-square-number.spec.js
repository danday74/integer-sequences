const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/get-nth-number-spec')

describe('getNthSquareNumber', () => {
  spec(main.getNthSquareNumber, 'S', [
    {n: Big('0'), value: undefined},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('4')},
    {n: Big('3'), value: Big('9')},
    {n: Big('4'), value: Big('16')},
    {n: Big('5'), value: Big('25')},
    {n: Big('73'), value: Big('5329')},
    {n: Big('100000000'), value: Big('10000000000000000'), testName: '100m'}
  ])
})
