function presentati(luogo) {
    console.log(`${this.nome} da ${luogo}`);
}

const persona = { nome: "Mario" };
presentati.apply(persona, ["Roma"]); // Mario da Roma