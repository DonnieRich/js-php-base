let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (indipendente)

let obj1 = { nome: "Mario" };
let obj2 = obj1;
obj2.nome = "Luigi";
console.log(obj1.nome); // "Luigi" (stesso riferimento)