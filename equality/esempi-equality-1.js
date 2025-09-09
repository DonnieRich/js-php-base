console.log(1 == "1");              // ✅ true (coercizione)
console.log(1 === "1");             // ❌ false (tipi diversi)

console.log(0 == false);            // ✅ true
console.log(0 === false);           // ❌ false

console.log(Object.is(NaN, NaN));   // ✅ true
console.log(NaN === NaN);           // ❌ false

console.log(Object.is(0, -0));      // ❌ false
console.log(0 === -0);              // ✅ true