function roundIt(n) {
  const [left, right] = n.toString().split('.');
  const leftDigits = left.length;
  const rightDigits = right.length;

  if (leftDigits < rightDigits) {
    return Math.ceil(n);
  } else if (leftDigits > rightDigits) {
    return Math.floor(n);
  } else {
    return Math.round(n);
  }
}

// Examples
console.log(roundIt(3.45));   // Output: 4
console.log(roundIt(34.5));   // Output: 34
console.log(roundIt(34.56));  // Output: 35
