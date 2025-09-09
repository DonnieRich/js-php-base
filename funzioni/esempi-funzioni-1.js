saluta(); // ✅ Funziona anche se definita dopo

// Dichiarazione
function saluta() {
    console.log("Ciao!");
}

// Espressione
const saluta2 = function() {
    console.log("Ciao 2!");
};
saluta2(); // ✅ Funziona solo dopo la definizione
