# integer-sequences

[![build](https://img.shields.io/travis/danday74/integer-sequences/master.svg?label=linux)](https://travis-ci.org/danday74/integer-sequences)
[![coverage](https://coveralls.io/repos/github/danday74/integer-sequences/badge.svg)](https://coveralls.io/github/danday74/integer-sequences)
[![npm](https://img.shields.io/npm/v/integer-sequences.svg)](https://www.npmjs.com/package/integer-sequences)
[![dependencies](https://david-dm.org/danday74/integer-sequences/status.svg)](https://david-dm.org/danday74/integer-sequences)
[![downloads](https://img.shields.io/npm/dm/integer-sequences.svg)](https://www.npmjs.com/package/integer-sequences)

**Functional library for precise access to integer sequences such as prime numbers, square numbers, triangle numbers, etc**





<br>

## Intro

`npm install --save integer-sequences`

Functional library for precise access to integer sequences. Cached access offers performance. For example:

```javascript 1.7
const intseqs = require('integer-sequences')
intseqs.getPrimeNumbers(100000000)  // takes 2145ms - first call
intseqs.getPrimeNumbers(100000000)  // takes 23ms - second cached call
```

It makes use of [Big.js](http://mikemcl.github.io/big.js) to guarantee precision when working with big numbers.

Numeric arguments can be given as:
 
* strings - e.g. `intseqs.isPrimeNumber('1000000')`
* Big.js objects - e.g. `intseqs.isPrimeNumber(Big('1000000'))` or `intseqs.isPrimeNumber(Big(1000000))`
* numbers - e.g. `intseqs.isPrimeNumber(1000000)`

Function return values are typically [Big.js](http://mikemcl.github.io/big.js) objects. To access a [Big.js](http://mikemcl.github.io/big.js) object value:

```javascript 1.7
const intseqs = require('integer-sequences')
const bigObj = intseqs.getNthPrimeNumber(10)
const value = bigObj.toFixed()
console.log(value) // logs '29'
```





<br>

## Misc functions

```
intseqs.getNumbersAsJson(max: number)  // Returns a list of numeric JSON objects
```

Example:

```javascript 1.7
intseqs.getNumbersAsJson(7)
```

Returns:

```metadata json
[
  {number: 1, cube: Big(1), fibonacci: [Big(1), Big(2)], padovan: [Big(1), Big(2), Big(3)], prime: false, tetrahedron: Big(1), triangle: Big(1), square: Big(1)},
  {number: 2, cube: false, fibonacci: Big(3), padovan: [Big(4), Big(5)], prime: 1, tetrahedron: false, triangle: false, square: false},
  {number: 3, cube: false, fibonacci: Big(4), padovan: Big(6), prime: 2, tetrahedron: false, triangle: Big(2), square: false},
  {number: 4, cube: false, fibonacci: false, padovan: Big(7), prime: false, tetrahedron: Big(2), triangle: false, square: Big(2)},
  {number: 5, cube: false, fibonacci: Big(5), padovan: Big(8), prime: 3, tetrahedron: false, triangle: false, square: false},
  {number: 6, cube: false, fibonacci: false, padovan: false, prime: false, tetrahedron: false, triangle: Big(3), square: false},
  {number: 7, cube: false, fibonacci: false, padovan: Big(9), prime: 4, tetrahedron: false, triangle: false, square: false}
]
```

Prime values returned may be of type `number` for performance reasons.

```
intseqs.getNumberAsJson(n: number)  // Returns the nth numeric JSON object
```





<br>

## Prime numbers - [A000040](https://oeis.org/A000040)

```
intseqs.getPrimeNumbers(max: number)  // Returns a list of primes, the last being the largest <= max
intseqs.getNPrimeNumbers(n: number)   // Returns the first n primes
intseqs.getNthPrimeNumber(n: number)  // Returns the nth prime
intseqs.isPrimeNumber(n: number)      // Returns x where n is the xth term or false where n is not a prime
intseqs.isPrimeNumberFast(n: number)  // Returns a boolean, is n a prime?
```

## Cube numbers - [A000578](https://oeis.org/A000578)

```
intseqs.cube.sequence(n: number)
intseqs.cube.sequenceMax(max: number)
intseqs.cube.term(n: number)
intseqs.cube.isTerm(n: number)
```

## Fibonacci numbers - [A000045](https://oeis.org/A000045)

```
intseqs.getFibonacciNumbers(max: number)
intseqs.getNFibonacciNumbers(n: number)
intseqs.getNthFibonacciNumber(n: number)
intseqs.isFibonacciNumber(n: number)
intseqs.isFibonacciNumberFast(n: number)
```

## Padovan numbers - [A134816](https://oeis.org/A134816)

```
intseqs.getPadovanNumbers(max: number)
intseqs.getNPadovanNumbers(n: number)
intseqs.getNthPadovanNumber(n: number)
intseqs.isPadovanNumber(n: number)
```

## Square numbers - [A000290](https://oeis.org/A000290)

```
intseqs.getSquareNumbers(max: number)
intseqs.getNSquareNumbers(n: number)
intseqs.getNthSquareNumber(n: number)
intseqs.isSquareNumber(n: number)
```

## Tetrahedron numbers - [A000292](https://oeis.org/A000292)

```
intseqs.getTetrahedronNumbers(max: number)
intseqs.getNTetrahedronNumbers(n: number)
intseqs.getNthTetrahedronNumber(n: number)
intseqs.isTetrahedronNumber(n: number)
```

## Triangle numbers - [A000217](https://oeis.org/A000217)

```
intseqs.getTriangleNumbers(max: number)
intseqs.getNTriangleNumbers(n: number)
intseqs.getNthTriangleNumber(n: number)
intseqs.isTriangleNumber(n: number)
```





<br>

## Author says

People think I am religious. Wrong. People think religion is boring! So do I. Worse than that, man-made religion is destructive. Jesus himself warned against it.

What Jesus wants is relationship; to be your friend. This [video](https://www.youtube.com/watch?v=1IAhDGYlpqY) explains it fairly well.

Remember, Jesus is alive, and you can be too if you believe in Him and leave your life of sin :)

> For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him. Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God’s one and only Son.

[John 3:16-18](https://www.bible.com/en-GB/bible/111/JHN.3.16-18.niv)

"He is no fool who gives up what he cannot keep to gain that which he cannot lose" Jim Elliot


