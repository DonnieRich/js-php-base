const originale = { a: 1, b: { c: 2 } };

// Shallow copy
const copiaShallow = { ...originale };
copiaShallow.b.c = 99;

console.log(originale.b.c); // 99 (effetto collaterale!)

// Deep copy (con JSON)
const copiaDeep = JSON.parse(JSON.stringify(originale));
copiaDeep.b.c = 123;

console.log(originale.b.c); // 99
console.log(copiaDeep.b.c); // 123