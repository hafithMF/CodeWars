function threeInOne(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i += 3) {
    const sum = arr.slice(i, i + 3).reduce((acc, curr) => acc + curr, 0);
    result.push(sum);
  }

  return result;
}

// Examples
console.log(threeInOne([1,2,3]));            // Output: [6]
console.log(threeInOne([1,2,3,4,5,6]));       // Output: [6,15]
console.log(threeInOne([1,2,3,4,5,6,7,8,9])); // Output: [6,15,24]
console.log(threeInOne([1,3,5,2,4,6,7,7,7])); // Output: [9,12,21]
