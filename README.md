# math-sequences

[![build](https://img.shields.io/travis/danday74/math-sequences/master.svg?label=linux)](https://travis-ci.org/danday74/math-sequences)
[![coverage](https://coveralls.io/repos/github/danday74/math-sequences/badge.svg)](https://coveralls.io/github/danday74/math-sequences)
[![npm](https://img.shields.io/npm/v/math-sequences.svg)](https://www.npmjs.com/package/math-sequences)
[![dependencies](https://david-dm.org/danday74/math-sequences/status.svg)](https://david-dm.org/danday74/math-sequences)
[![downloads](https://img.shields.io/npm/dm/math-sequences.svg)](https://www.npmjs.com/package/math-sequences)

**Easy access to triangle numbers, square numbers, prime numbers, etc**

`npm install --save math-sequences`





<br>

## Info

Makes use of [Big.js](http://mikemcl.github.io/big.js) to guarantee precision when working with big numbers.

Numeric arguments can be given as:
 
* strings - e.g. `isPrimeNumber('1000000')`
* Big.js objects - e.g. `isPrimeNumber(Big('1000000'))` or `isPrimeNumber(Big(1000000))`
* numbers - e.g. `isPrimeNumber(1000000)`

Function return values are typically [Big.js](http://mikemcl.github.io/big.js) objects.

To access a [Big.js](http://mikemcl.github.io/big.js) object value:

```javascript 1.7
const ms = require('math-sequences')
const bigObj = ms.getNthPrimeNumber(10)
const value = bigObj.toFixed()
console.log(value) // logs '29'
```





<br>

## General

```
ms.getNumbersAsJson(max: number)  // Returns a JSON object providing data on a list of numbers.
```

Example:

```javascript 1.7
ms.getNumbersAsJson(7)
```

Returns:

```metadata json
[
  {number: 1, prime: false, triangle: Big(1), square: Big(1)},
  {number: 2, prime: 1, triangle: false, square: false},
  {number: 3, prime: 2, triangle: Big(2), square: false},
  {number: 4, prime: false, triangle: false, square: Big(2)},
  {number: 5, prime: 3, triangle: false, square: false},
  {number: 6, prime: false, triangle: Big(3), square: false},
  {number: 7, prime: 4, triangle: false, square: false}
]
```





<br>

## Prime numbers

```
ms.getPrimeNumbers(max: number)  // Returns list of primes, the last being <= max
ms.getNPrimeNumbers(n: number)   // Returns the first n primes
ms.getNthPrimeNumber(n: number)  // Returns the nth prime
ms.isPrimeNumber(n: number)      // Returns a boolean, is n a prime?
ms.isPrimeNumberFast(n: number)  // Returns a boolean, is n a prime?
```

## Square numbers

```
ms.getSquareNumbers(max: number)
ms.getNSquareNumbers(n: number)
ms.getNthSquareNumber(n: number)
ms.isSquareNumber(n: number)
```

## Triangle numbers

```
ms.getTriangleNumbers(max: number)
ms.getNTriangleNumbers(n: number)
ms.getNthTriangleNumber(n: number)
ms.isTriangleNumber(n: number)
```
