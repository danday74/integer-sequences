const primes = require('primes')
const isPrime = require('is-prime')
const fs = require('fs')
const getHighestPrimeNumber = require('./getHighestPrimeNumber')

const PRIME_NUMBERS_FILE = __dirname + '/primeNumbers.md'

const getPrimeNumbers = max => {

  const contents = fs.readFileSync(PRIME_NUMBERS_FILE, 'utf8')
  const fileNumbers = JSON.parse(`[${contents}]`)
  const primeObject = getHighestPrimeNumber(max, fileNumbers)

  if (!primeObject) {
    const numbers = primes(max + 1)
    numbers.forEach(num => {
      /* istanbul ignore next */
      if (!isPrime(num)) throw new Error(`${num} is not a prime number`)
    })
    fs.writeFileSync(PRIME_NUMBERS_FILE, numbers)
    return numbers
  } else if (primeObject.all || primeObject.highest === max) {
    return primeObject.array
  } else {
    const moreNumbers = primes(primeObject.highest + 1, max + 1)
    moreNumbers.forEach(num => {
      /* istanbul ignore next */
      if (!isPrime(num)) throw new Error(`${num} is not a prime number`)
    })
    const numbers = [...primeObject.array, ...moreNumbers]
    fs.writeFileSync(PRIME_NUMBERS_FILE, numbers)
    return numbers
  }
}

module.exports = getPrimeNumbers
