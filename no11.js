function grabDoll(dolls) {
  var bag = [];

  for (var i = 0; i < dolls.length; i++) {
    var doll = dolls[i];

    if (doll === "Hello Kitty" || doll === "Barbie doll") {
      bag.push(doll);
    } else {
      continue;
    }
    if (bag.length === 3) {
      break;
    }
  }

  return bag;
}
