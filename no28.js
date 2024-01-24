function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i].toString();
    const next = arr[i + 1].toString();

    if (current === next || current === next.split('').reverse().join('')) {
      return [parseInt(current), parseInt(next)];
    }
  }

  return [-1, -1];
}

// Examples
console.log(mirrorImage([11,22,33,33,22,11]));            // Output: [33,33]
console.log(mirrorImage([454,86,57,75,16,88]));            // Output: [57,75]
console.log(mirrorImage([454,0,57,0,16,88]));              // Output: [-1,-1]
