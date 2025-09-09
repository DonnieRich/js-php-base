const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key, obj[key]);
}

console.log(Object.keys(obj));

console.log(Object.entries(obj));