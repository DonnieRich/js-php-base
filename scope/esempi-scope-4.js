console.log(a); // ✅ undefined (hoisting di var)
var a = 10;

console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;
