let arr = [10, 20, 30];

// Proprietà custom
arr.nome = "Mario";

console.log("for...of:");
for (let value of arr) {
  // solo 10, 20, 30, salta "nome"
  console.log(value);
}

console.log("for...in:");
for (let key in arr) {
  // 10, 20, 30, non salta "nome"
  console.log(key, arr[key]); 
}