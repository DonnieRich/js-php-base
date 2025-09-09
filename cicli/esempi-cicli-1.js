let arr = [1, 2, 3];

console.log("ciclo FOR");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("ciclo FOR...OF");
for (let value of arr) {
  console.log(value);
}

console.log("metodo forEach");
arr.forEach((value, index) => {
  console.log(index, value);
});

console.log("ciclo FOR...IN");
for (let key in arr) {
  console.log(key, arr[key]);
}