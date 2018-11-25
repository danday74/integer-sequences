const fs = require('fs')
const primes = require('primes')
const isPrime = require('is-prime')
const getHighestPrimeNumber = require('./getHighestPrimeNumber')
const debug = require('debug')('generate-primes')

const PRIME_NUMBERS_FILE = __dirname + '/primeNumbers.md'

const getPrimeNumbers = max => {

  if (max < 2) return []

  const contents = fs.readFileSync(PRIME_NUMBERS_FILE, 'utf8')
  const fileNumbers = JSON.parse(`[${contents}]`)
  const primeObject = getHighestPrimeNumber(max, fileNumbers)

  /* istanbul ignore next */
  if (!primeObject) {
    debug('generating primes')
    const numbers = primes(max + 1)
    debug('checking primes')
    numbers.forEach((num, i) => {
      if (i % 100 === 0) debug('validating prime', num, i)
      if (!isPrime(num)) throw new Error(`${num} is not a prime number`)
    })
    fs.writeFileSync(PRIME_NUMBERS_FILE, numbers)
    return numbers
  } else if (primeObject.all || primeObject.highest === max) {
    return primeObject.array
  } else {
    debug('generating more primes')
    const moreNumbers = primes(primeObject.highest + 1, max + 1)
    debug('checking more primes')
    moreNumbers.forEach((num, i) => {
      if (i % 100 === 0) debug('validating prime', num, i)
      /* istanbul ignore next */
      if (!isPrime(num)) throw new Error(`${num} is not a prime number`)
    })
    const numbers = [...primeObject.array, ...moreNumbers]
    if (moreNumbers.length) fs.writeFileSync(PRIME_NUMBERS_FILE, numbers)
    return numbers
  }
}

module.exports = getPrimeNumbers
