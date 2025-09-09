function presentati(luogo) {
    console.log(`${this.nome} da ${luogo}`);
}

const persona = { nome: "Mario" };

const salutoMario = presentati.bind(persona, "Torino");
salutoMario(); // Mario da Torino