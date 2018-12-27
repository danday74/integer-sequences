const Big = require('big.js')
const main = require('../..')
const spec = require('../specs/get-nth-number-spec')

describe('getNthFibonacciNumber', () => {
  spec(main.getNthFibonacciNumber, 'F', [
    {n: Big('0'), value: Big('0')},
    {n: Big('1'), value: Big('1')},
    {n: Big('2'), value: Big('1')},
    {n: Big('3'), value: Big('2')},
    {n: Big('4'), value: Big('3')},
    {n: Big('5'), value: Big('5')},
    {n: Big('73'), value: Big('806515533049393')},
    {n: Big('300'), value: Big('222232244629420445529739893461909967206666939096499764990979600')}
  ])
})