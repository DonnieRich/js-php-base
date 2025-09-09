const bottone = {
    label: "Salva",
    click() {
        console.log(`Hai cliccato: ${this.label}`);
    },
    callbackArrowClick () {
      return () => {
        console.log(`Hai cliccato: ${this.label}`)
      }
    },
    callbackNormaleClick () {
      return function () {
        console.log(`Hai cliccato: ${this.label}`)
      }
    }
};

function registraEvento(callback) {
    console.log("Evento registrato...");
    // Simuliamo l'esecuzione dell'evento:
    callback();
}

registraEvento(bottone.click); 

registraEvento(bottone.click.bind(bottone)); 

registraEvento(bottone.callbackArrowClick());

registraEvento(bottone.callbackNormaleClick());
