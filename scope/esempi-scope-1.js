let variabileGlobale = "Sono globale";

function miaFunzione() {
    let variabileLocale = "Sono locale";
    console.log(variabileGlobale); // ✅ Accessibile
    console.log(variabileLocale);  // ✅ Accessibile
}

miaFunzione();

console.log(variabileGlobale); // ✅ Accessibile
console.log(variabileLocale);  // ❌ ReferenceError