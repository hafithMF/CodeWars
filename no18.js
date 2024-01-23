function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map(word => word.split("").join(separator))
    .join(" ");
}

// Examples
console.log(splitAndMerge("My name is John", " "));  
console.log(splitAndMerge("My name is John", "-")); 
console.log(splitAndMerge("Hello World!", "."));     
console.log(splitAndMerge("Hello World!", ","));   
