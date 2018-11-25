const getReturnObject = (prime, primes) => {
  const idx = primes.indexOf(prime)
  const array = primes.slice(0, idx + 1)
  const all = primes.length > array.length
  return {
    highest: prime,
    idx,
    array,
    all
  }
}

const getHighestPrimeNumber = (num, primes) => {

  let mid
  let lo = 0
  let hi = primes.length - 1

  while (lo <= hi) {
    mid = ~~((hi - lo) / 2 + lo)

    if (primes[mid] === num) {
      return getReturnObject(primes[mid], primes)
    } else if (primes[mid] > num) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return primes[hi] ? getReturnObject(primes[hi], primes) : null
}

module.exports = getHighestPrimeNumber
