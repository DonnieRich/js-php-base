const persone = [
  { nome: "Alice", anni: 25 },
  { nome: "Bob", anni: 25 },
  { nome: "Charlie", anni: 30 }
];

const gruppi = persone.reduce((acc, persona) => {

  if (!acc[persona.anni]) {
    acc[persona.anni] = [];
  }

  acc[persona.anni].push(persona.nome);

  return acc;
}, {});
// l'accumulatore viene inizializzato ad oggetto vuoto

console.log(gruppi);
// {
//   25: ["Alice", "Bob"],
//   30: ["Charlie"]
// }