function presentati(luogo) {
    console.log(`${this.nome} da ${luogo}`);
}

const persona = { nome: "Mario" };
presentati.call(persona, "Roma"); // Mario da Roma