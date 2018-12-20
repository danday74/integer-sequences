# math-sequences

[![build](https://img.shields.io/travis/danday74/math-sequences/master.svg?label=linux)](https://travis-ci.org/danday74/math-sequences)
[![coverage](https://coveralls.io/repos/github/danday74/math-sequences/badge.svg)](https://coveralls.io/github/danday74/math-sequences)
[![npm](https://img.shields.io/npm/v/math-sequences.svg)](https://www.npmjs.com/package/math-sequences)
[![dependencies](https://david-dm.org/danday74/math-sequences/status.svg)](https://david-dm.org/danday74/math-sequences)
[![downloads](https://img.shields.io/npm/dm/math-sequences.svg)](https://www.npmjs.com/package/math-sequences)

**Functional library for precise access to math sequences such as prime numbers, square numbers, triangle numbers, etc**





<br>

## Intro

`npm install --save math-sequences`

Functional library for precise access to math sequences. Cached access offers performance. For example:

```javascript 1.7
const ms = require('math-sequences')
ms.getPrimeNumbers(100000000)  // takes 2145ms - first call
ms.getPrimeNumbers(100000000)  // takes 23ms - second call
```

Makes use of [Big.js](http://mikemcl.github.io/big.js) to guarantee precision when working with big numbers.

Numeric arguments can be given as:
 
* strings - e.g. `ms.isPrimeNumber('1000000')`
* Big.js objects - e.g. `ms.isPrimeNumber(Big('1000000'))` or `ms.isPrimeNumber(Big(1000000))`
* numbers - e.g. `ms.isPrimeNumber(1000000)`

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

NOTE: The values for `prime` in this JSON are numeric for performance reasons.





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





<br>

## Author says

People think I am religious. Wrong. People think religion is boring! So do I. Worse than that, man-made religion is destructive. Jesus himself warned against it.

What Jesus wants is relationship. To be your friend. This [video](https://www.youtube.com/watch?v=1IAhDGYlpqY) explains it perfectly.

Remember, Jesus is alive, and you can be too if you believe in Him and leave your life of sin :)

> For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him. Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God’s one and only Son.

[John 3:16](https://www.biblegateway.com/passage/?search=John+3%3A16-18&version=NIV)

"He is no fool who gives up what he cannot keep to gain that which he cannot lose" Jim Elliot


