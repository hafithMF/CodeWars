function fiveLine(s) {
  s = s.trim(); // Remove whitespace from the edges of the string
  return `${s}\n${s + s}\n${s + s + s}\n${s + s + s + s}\n${s + s + s + s + s}`;
}

// Test cases
console.log(fiveLine("  a"));
// Output:
// a
// aa
// aaa
// aaaa
// aaaaa

console.log(fiveLine("  xy "));
// Output:
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy
