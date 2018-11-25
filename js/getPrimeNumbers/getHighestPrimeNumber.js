const _ = require('lodash')

const getHighestPrimeNumber = (num, primes) => {

  let idx = _.sortedIndex(primes, num)
  if (primes[idx] !== num) idx -= 1
  const highest = primes[idx]

  if (!highest) return null

  const array = primes.slice(0, idx + 1)
  const all = primes.length > array.length

  return {
    highest,
    idx,
    array,
    all
  }
}

module.exports = getHighestPrimeNumber
