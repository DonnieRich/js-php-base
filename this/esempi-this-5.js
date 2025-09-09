const persona = {
    nome: "Mario",
    saluta() {
        console.log(`Ciao, sono ${this.nome}`);
    }
};

persona.saluta(); // ✅ Ciao, sono Mario

const saluto = persona.saluta;
saluto(); // ❌ this è undefined o window
