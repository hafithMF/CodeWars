function colorOf(r, g, b) {
  // Convert numbers to hex string form and pad with zeros if needed
  const redHex = r.toString(16).padStart(2, '0');
  const greenHex = g.toString(16).padStart(2, '0');
  const blueHex = b.toString(16).padStart(2, '0');

  // Combine them to form the web color code
  const colorCode = `#${redHex}${greenHex}${blueHex}`;

  return colorCode;
}

// Examples
console.log(colorOf(255, 0, 0));   // "#ff0000"
console.log(colorOf(0, 111, 0));   // "#006f00"
console.log(colorOf(1, 2, 3));      // "#010203"
