const persona = {
    nome: "Mario",
    valoreThis: this,
    stampaThis: function() {
        console.log(this.valoreThis);
    },
    stampaThisArrow: () => {
      console.log(this.valoreThis);
    }
};

persona.stampaThis();
persona.stampaThisArrow();