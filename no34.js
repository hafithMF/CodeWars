function cutCube(volume, n) {
  const cubeRoot = Math.cbrt(volume);
  return Number.isInteger(cubeRoot) && (volume % n === 0) && Number.isInteger(Math.cbrt(n));
}

// Examples
console.log(cutCube(27, 27));    // Output: true
console.log(cutCube(512, 8));    // Output: true
console.log(cutCube(512, 64));   // Output: true
console.log(cutCube(256, 8));    // Output: false
console.log(cutCube(27, 3));     // Output: false
console.log(cutCube(123, 456));  // Output: false
console.log(cutCube(50000, 50)); // Output: false
console.log(cutCube(256, 4));    // Output: false
