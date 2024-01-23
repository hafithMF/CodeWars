function pickIt(arr) {
  var odd = [],
      even = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // Jika elemen merupakan bilangan genap, masukkan ke dalam even array
      even.push(arr[i]);
    } else {
      // Jika elemen merupakan bilangan ganjil, masukkan ke dalam odd array
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}
