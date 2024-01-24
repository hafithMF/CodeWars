function countAnimals(animals, count) {
  const result = [];

  count.forEach(animal => {
    const regex = new RegExp(animal, 'g');
    const matches = animals.match(regex) || [];
    result.push(matches.length);
  });

  return result;
}

// Test cases
console.log(countAnimals("dog,cat", ["dog", "cat"])); //=> [1, 1]
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"])); //=> [1, 1, 0]
console.log(countAnimals("dog,dog,cat", ["dog", "cat"])); //=> [2, 1]
console.log(countAnimals("dog,dog,cat", ["pig", "cow"])); //=> [0, 0]
