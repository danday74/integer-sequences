const fs = require('fs')
const _ = require('lodash')

const getPrimeNumbers = max => {

  if (max < 2) return []

  let primes = []
  let numFiles = fs.readdirSync(__dirname + '/primes').length

  for (let i = 0; i < numFiles; i++) {

    const contents = fs.readFileSync(__dirname + `/primes/primes${i + 1}.txt`, 'utf8').replace(/\d+,\d+,\d+/, '')
    const temp = contents.match(/\d+/g).map(x => parseInt(x))
    primes = [...primes, ...temp]
    const lastPrime = _.last(primes)
    if (max <= lastPrime) break
  }

  const lastPrime = _.last(primes)
  if (max > lastPrime) throw Error('Maximum prime supported is ' + lastPrime)

  let idx = _.sortedIndex(primes, max)
  if (primes[idx] !== max) idx -= 1
  return _.take(primes, idx + 1)
}

module.exports = getPrimeNumbers
