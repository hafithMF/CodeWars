function rndCode() {
  const letters = "ABCDEFGHIJKLM";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*";

  // Generate random uppercase letters
  const letter1 = letters[~~(letters.length * Math.random())];
  const letter2 = letters[~~(letters.length * Math.random())];

  // Generate four random numbers
  const num3 = numbers[~~(numbers.length * Math.random())];
  const num4 = numbers[~~(numbers.length * Math.random())];
  const num5 = numbers[~~(numbers.length * Math.random())];
  const num6 = numbers[~~(numbers.length * Math.random())];

  // Generate two random symbols
  const symbol7 = symbols[~~(symbols.length * Math.random())];
  const symbol8 = symbols[~~(symbols.length * Math.random())];

  // Combine the generated characters to form the verification code
  const verificationCode = `${letter1}${letter2}${num3}${num4}${num5}${num6}${symbol7}${symbol8}`;

  return verificationCode;
}

// Test cases
for (let i = 0; i < 10; i++) {
  console.log(rndCode());
}
