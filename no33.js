function maxMin(arr1, arr2) {
  const differences = arr1.map((num, index) => Math.abs(num - arr2[index]));
  const maxValue = Math.max(...differences);
  const minValue = Math.min(...differences);
  return [maxValue, minValue];
}

// Examples
console.log(maxMin([1,3,5],[9,8,7]));                  // Output: [8, 2]
console.log(maxMin([1,10,100,1000],[0,0,0,0]));        // Output: [1000, 1]
console.log(maxMin([10,20,30,40],[111,11,1,-111]));    // Output: [151, 9]
