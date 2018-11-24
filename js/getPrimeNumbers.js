const primes = require('primes')
const isPrime = require('is-prime')

const getPrimeNumbers = max => {
  const numbers = primes(max + 1)
  numbers.forEach(num => {
    if (!isPrime(num)) throw new Error(`${num} is not a prime number`)
  })
  return numbers
}

module.exports = getPrimeNumbers
