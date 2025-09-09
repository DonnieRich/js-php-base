let func1 = () => 4;
let func2 = func1;

func1.description = "Restituisce il numero 4";

console.log(func2.description);