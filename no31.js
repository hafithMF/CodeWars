function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  }

  if (arr.includes(5) && arr.includes(13)) {
    return "It's a black array";
  }

  return "It's a white array";
}

// Examples
console.log(blackAndWhite(5, 13));     // Output: "It's a fake array"
console.log(blackAndWhite([5, 13]));   // Output: "It's a black array"
console.log(blackAndWhite([5, 12]));   // Output: "It's a white array"
