const isPrime = require('./isPrime');

// Test cases
console.log("Testing isPrime function...\n");

// Valid prime numbers
console.log("Prime numbers:");
console.log(`isPrime(2): ${isPrime(2)}`);      // true
console.log(`isPrime(3): ${isPrime(3)}`);      // true
console.log(`isPrime(5): ${isPrime(5)}`);      // true
console.log(`isPrime(7): ${isPrime(7)}`);      // true
console.log(`isPrime(11): ${isPrime(11)}`);    // true
console.log(`isPrime(13): ${isPrime(13)}`);    // true
console.log(`isPrime(17): ${isPrime(17)}`);    // true
console.log(`isPrime(19): ${isPrime(19)}`);    // true
console.log(`isPrime(97): ${isPrime(97)}`);    // true

// Valid non-prime numbers
console.log("\nNon-prime numbers:");
console.log(`isPrime(1): ${isPrime(1)}`);      // false
console.log(`isPrime(4): ${isPrime(4)}`);      // false
console.log(`isPrime(6): ${isPrime(6)}`);      // false
console.log(`isPrime(8): ${isPrime(8)}`);      // false
console.log(`isPrime(10): ${isPrime(10)}`);    // false
console.log(`isPrime(100): ${isPrime(100)}`);  // false
console.log(`isPrime(121): ${isPrime(121)}`);  // false

// Invalid inputs
console.log("\nTesting invalid inputs:");
try {
  isPrime(-5);
} catch (error) {
  console.log(`isPrime(-5): Error - ${error.message}`);
}

try {
  isPrime(3.5);
} catch (error) {
  console.log(`isPrime(3.5): Error - ${error.message}`);
}

try {
  isPrime("10");
} catch (error) {
  console.log(`isPrime("10"): Error - ${error.message}`);
}

try {
  isPrime(null);
} catch (error) {
  console.log(`isPrime(null): Error - ${error.message}`);
}

console.log("\nAll tests completed!");