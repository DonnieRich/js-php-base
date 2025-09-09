{
  let variabileLocale2 = "Sono locale ma senza funzione";
  console.log(variabileLocale2);  // ✅ Accessibile
}

function miaFunzione() {
    let variabileLocale1 = "Sono locale";
    console.log(variabileLocale1);  // ✅ Accessibile
}

miaFunzione();

console.log(variabileLocale1); // ❌ ReferenceError
console.log(variabileLocale2);  // ❌ ReferenceError