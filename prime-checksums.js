const _ = require('lodash')
const assert = require('assert')
const fs = require('fs')
const main = require('.')

console.log('checksums running')

const primes = main.getPrimeNumbers()

const path = __dirname + '/js/prime-numbers/checksums/10m-primes.txt'
const contents = fs.readFileSync(path, 'utf8')
let checksums = contents.match(/\d+/g)

// noinspection JSCheckFunctionSignatures
checksums = _.map(checksums, Number)

primes.forEach((prime, i) => {
  assert(prime === checksums[i])
})

console.log('checked', primes.length, 'primes')
