const persone = [
  { nome: "Alice", anni: 25 },
  { nome: "Bob", anni: 25 },
  { nome: "Charlie", anni: 30 }
];

const gruppi = {};

for (const {nome, anni} of persone) {
  
  if (!gruppi[anni]) {
    gruppi[anni] = [];
  }
  
  gruppi[anni].push(nome);
  
}

console.log(gruppi);
// {
//   25: ["Alice", "Bob"],
//   30: ["Charlie"]
// }