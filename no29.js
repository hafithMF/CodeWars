function bigToSmall(arr) {
  const flatArray = [].concat(...arr); // Flatten the 2D array
  const sortedArray = flatArray.sort((a, b) => b - a); // Sort in descending order
  const result = sortedArray.join('>'); // Join with ">"

  return result;
}

// Examples
console.log(bigToSmall([[1,2],[3,4],[5,6]]));    // Output: "6>5>4>3>2>1"
console.log(bigToSmall([[1,3,5],[2,4,6]]));       // Output: "6>5>4>3>2>1"
console.log(bigToSmall([[1,1],[1],[1,1]]));       // Output: "1>1>1>1>1"
