console.log("Hello" == "hello"); // false
console.log("world" === "world"); // true

console.log("a" > "b"); // false
console.log("a" < "b"); // true

console.log("abc" < "abcd"); // true

console.log("42" < "100"); // false (string comparison, not numeric)
console.log("42" < 100); // true (numeric comparison after type coercion)

console.log("a" > "A"); // true (lowercase letters have higher Unicode values than uppercase)