// Un literal è una string primitive
const strPrim = "foo";

// Coercizione in una string primitive "1"
const strPrim2 = String(1);

// Coercizione in una string primitive "true"
const strPrim3 = String(true);

// String con la keyword new restituisce un oggetto string wrapper
const strObj = new String(strPrim);

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"