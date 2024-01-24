function isolateIt(arr) {
  return arr.map(str => {
    const mid = Math.floor(str.length / 2);

    return str.length % 2 === 0
      ? str.slice(0, mid) + '|' + str.slice(mid)
      : str.slice(0, mid) + '|' + str.slice(mid + 1);
  });
}

// Examples
console.log(isolateIt(["abcd","efgh"]));    // Output: ["ab|cd","ef|gh"]
console.log(isolateIt(["abcde","fghij"]));  // Output: ["ab|de","fg|ij"]
console.log(isolateIt(["1234","56789"]));   // Output: ["12|34","56|89"]
