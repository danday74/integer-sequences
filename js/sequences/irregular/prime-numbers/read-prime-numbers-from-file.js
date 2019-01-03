const _ = require('lodash')
const fs = require('fs')

const DIR = __dirname + '/primes'

const filesRead = [] // keeps track of which files have been read already
let primes = []

const getLastPrime = () => _.last(primes) || 0

const readPrimeNumbersFromFile = max => {

  let lastPrime = getLastPrime()
  let files = fs.readdirSync(DIR)

  files = _.difference(files, filesRead)

  files.forEach(file => {
    if (max == null || max.gt(lastPrime)) {
      filesRead.push(file)
      const path = DIR + '/' + file
      const contents = fs.readFileSync(path, 'utf8').replace(/\d+,\d+,\d+/, '')
      let temp = contents.match(/\d+/g)
      temp = _.map(temp, Number)
      primes = [...primes, ...temp]
    }
    lastPrime = getLastPrime()
  })
  if (max != null && max.gt(lastPrime)) throw RangeError(`Largest prime supported is ${lastPrime} but ${max.toFixed()} was requested`)
  return primes
}

module.exports = readPrimeNumbersFromFile
