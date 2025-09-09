if (true) {
    var a = 1;    // function scope
    let b = 2;    // block scope
    const c = 3;  // block scope
}

console.log(a); // ✅ 1
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError