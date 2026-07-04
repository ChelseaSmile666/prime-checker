/**
 * Determines if a number is prime.
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 * @throws {Error} If the input is not a positive integer
 */
function isPrime(num) {
  // Validate input is a positive integer
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error("Input must be a positive integer");
  }

  // 1 is not prime
  if (num === 1) {
    return false;
  }

  // 2 is prime
  if (num === 2) {
    return true;
  }

  // Even numbers (except 2) are not prime
  if (num % 2 === 0) {
    return false;
  }

  // Check for odd divisors up to the square root of num
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPrime;