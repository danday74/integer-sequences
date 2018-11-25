// export DEBUG=generate-primes

const main = require('./index')

const arg = process.argv[2]

function isInteger(str) {
  const n = Math.floor(Number(str))
  return n !== Infinity && String(n) === str && n >= 0
}

if (isInteger(arg)) {
  const num = parseInt(arg)
  console.time('generate-primes')
  main.getPrimeNumbers(num)
  console.timeEnd('generate-primes')
}
