<?php
// Funzione normale
function saluta($nome) {
    return "Ciao, $nome!";
}
echo saluta("Mario"); // Ciao, Mario!

// Closure
$prefisso = "Signor";
$salutaConPrefisso = function($nome) use ($prefisso) {
    return "Ciao, $prefisso $nome!";
};
echo $salutaConPrefisso("Rossi"); // Ciao, Signor Rossi!