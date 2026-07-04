# Prime Checker

A simple JavaScript utility to check if a number is prime.

## Usage

```javascript
const isPrime = require('./isPrime');

console.log(isPrime(2));    // true
console.log(isPrime(17));   // true
console.log(isPrime(1));    // false
console.log(isPrime(100));  // false
console.log(isPrime(97));   // true
```

## Function Signature

```javascript
isPrime(num: number): boolean
```

## Parameters

- `num` (number): A positive integer to check

## Returns

- `true` if the number is prime
- `false` if the number is not prime

## Throws

- `Error`: If the input is not a positive integer

## Examples

```javascript
// Valid inputs
isPrime(2);      // true
isPrime(13);     // true
isPrime(100);    // false

// Invalid inputs
isPrime(-5);     // throws Error: "Input must be a positive integer"
isPrime(3.5);    // throws Error: "Input must be a positive integer"
isPrime("10");   // throws Error: "Input must be a positive integer"
```

## Algorithm

The function uses an optimized trial division algorithm:
1. Validates that input is a positive integer
2. Handles edge cases (1 is not prime, 2 is prime)
3. Eliminates even numbers
4. Checks divisibility by odd numbers up to √n