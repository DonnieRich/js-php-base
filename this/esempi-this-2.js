const persona = {
    nome: "Mario",
    saluta: function () {
        console.log(this.nome);
    },
};

persona.saluta(); // Mario