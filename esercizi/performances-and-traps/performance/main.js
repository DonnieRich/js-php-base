const bigArray = Array(1e6).fill(0);

console.time("forEach");
bigArray.forEach(x => x + 1);
console.timeEnd("forEach");

console.time("for loop");
for (let i = 0; i < bigArray.length; i++) {
  bigArray[i] + 1;
}
console.timeEnd("for loop");
// Quale dei due sarà più veloce? Perché?