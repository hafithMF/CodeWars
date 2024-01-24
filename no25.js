function sortIt(arr) {
  return arr.slice().sort((a, b) => {
    const countA = arr.filter(num => num === a).length;
    const countB = arr.filter(num => num === b).length;

    if (countA === countB) {
      return b - a;
    }

    return countA - countB;
  });
}

// Examples
console.log(sortIt([1,1,1,2,2,3]));             // Output: [3,2,2,1,1,1]
console.log(sortIt([1,1,1,2,2,2,3,3,3]));       // Output: [3,3,3,2,2,2,1,1,1]
console.log(sortIt([1,2,3,4,4,5,5,6,6]));       // Output: [3,2,1,6,6,5,5,4,4]
