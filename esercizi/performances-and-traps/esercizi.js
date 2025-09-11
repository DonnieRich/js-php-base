// Cosa sta succedendo qui?
const nums = [1, 2, 3, 4, 5];

function findFirstEven(arr) {
  arr.forEach(n => {
    if (n % 2 === 0) return n; // <- Funzionerà?
  });
}
console.log(findFirstEven(nums)); // ???

//##################################################################

// Rimuovi tutti i numeri dispari da un array (modificando l'array durante il ciclo)
const numbers = [1, 2, 3, 4, 5];

// Funzionerà anche così?
// const numbers = [1, 2, 2, 3, 4, 5];

// E così?
// const numbers = [1, 1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    numbers.splice(i, 1);
  }
}
console.log(numbers); // Funzionerà?