function alienLanguage(str) {
  return str
    .toUpperCase()
    .split(" ")
    .map(word => word.slice(0, -1) + word.slice(-1).toLowerCase())
    .join(" ");
}

console.log(alienLanguage("My name is John"));  
console.log(alienLanguage("this is an example")); 
console.log(alienLanguage("Hello World")); 
