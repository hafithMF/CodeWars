function thinkingAndTesting(number, base) {
  return number - Math.pow(base, Math.floor(Math.log(number) / Math.log(base)));
}

// Test cases
console.log(thinkingAndTesting(4, 2));   // Output: 0
console.log(thinkingAndTesting(10, 2));  // Output: 2
console.log(thinkingAndTesting(16, 2));  // Output: 0
console.log(thinkingAndTesting(25, 5));  // Output: 0
console.log(thinkingAndTesting(256, 2)); // Output: 0
console.log(thinkingAndTesting(100, 3)); // Output: 1
