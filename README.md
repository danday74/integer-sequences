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
ms.getPrimeNumbers(100000000)  // takes 23ms - second cached call
```

It makes use of [Big.js](http://mikemcl.github.io/big.js) to guarantee precision when working with big numbers.

Numeric arguments can be given as:
 
* strings - e.g. `ms.isPrimeNumber('1000000')`
* Big.js objects - e.g. `ms.isPrimeNumber(Big('1000000'))` or `ms.isPrimeNumber(Big(1000000))`
* numbers - e.g. `ms.isPrimeNumber(1000000)`

Function return values are typically [Big.js](http://mikemcl.github.io/big.js) objects. To access a [Big.js](http://mikemcl.github.io/big.js) object value:

```javascript 1.7
const ms = require('math-sequences')
const bigObj = ms.getNthPrimeNumber(10)
const value = bigObj.toFixed()
console.log(value) // logs '29'
```





<br>

## Misc functions

```
ms.getNumbersAsJson(max: number)  // Returns a list of numeric JSON objects
```

Example:

```javascript 1.7
ms.getNumbersAsJson(7)
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
ms.getNumberAsJson(n: number)  // Returns the nth numeric JSON object
```





<br>

## Prime numbers - [A000040](https://oeis.org/A000040)

```
ms.getPrimeNumbers(max: number)  // Returns a list of primes, the last being the largest <= max
ms.getNPrimeNumbers(n: number)   // Returns the first n primes
ms.getNthPrimeNumber(n: number)  // Returns the nth prime
ms.isPrimeNumber(n: number)      // Returns x where n is the xth term or false where n is not a prime
ms.isPrimeNumberFast(n: number)  // Returns a boolean, is n a prime?
```

## Cube numbers - [A000578](https://oeis.org/A000578)

```
ms.getCubeNumbers(max: number)
ms.getNCubeNumbers(n: number)
ms.getNthCubeNumber(n: number)
ms.isCubeNumber(n: number)
```

## Fibonacci numbers - [A000045](https://oeis.org/A000045)

```
ms.getFibonacciNumbers(max: number)
ms.getNFibonacciNumbers(n: number)
ms.getNthFibonacciNumber(n: number)
ms.isFibonacciNumber(n: number)
ms.isFibonacciNumberFast(n: number)
```

## Padovan numbers - [A134816](https://oeis.org/A134816)

```
ms.getPadovanNumbers(max: number)
ms.getNPadovanNumbers(n: number)
ms.getNthPadovanNumber(n: number)
ms.isPadovanNumber(n: number)
```

## Square numbers - [A000290](https://oeis.org/A000290)

```
ms.getSquareNumbers(max: number)
ms.getNSquareNumbers(n: number)
ms.getNthSquareNumber(n: number)
ms.isSquareNumber(n: number)
```

## Tetrahedron numbers - [A000292](https://oeis.org/A000292)

```
ms.getTetrahedronNumbers(max: number)
ms.getNTetrahedronNumbers(n: number)
ms.getNthTetrahedronNumber(n: number)
ms.isTetrahedronNumber(n: number)
```

## Triangle numbers - [A000217](https://oeis.org/A000217)

```
ms.getTriangleNumbers(max: number)
ms.getNTriangleNumbers(n: number)
ms.getNthTriangleNumber(n: number)
ms.isTriangleNumber(n: number)
```





<br>

## Author says

People think I am religious. Wrong. People think religion is boring! So do I. Worse than that, man-made religion is destructive. Jesus himself warned against it.

What Jesus wants is relationship; to be your friend. This [video](https://www.youtube.com/watch?v=1IAhDGYlpqY) explains it fairly well.

Remember, Jesus is alive, and you can be too if you believe in Him and leave your life of sin :)

> For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him. Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God’s one and only Son.

[John 3:16-18](https://www.bible.com/en-GB/bible/111/JHN.3.16-18.niv)

"He is no fool who gives up what he cannot keep to gain that which he cannot lose" Jim Elliot


