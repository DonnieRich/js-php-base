<?php
$variabileGlobale = "Sono globale";

function miaFunzione() {
    global $variabileGlobale; // Necessario per accedere alla variabile globale
    $variabileLocale = "Sono locale";
    echo $variabileGlobale; // ✅
    echo $variabileLocale;  // ✅
}

miaFunzione();

echo $variabileGlobale; // ✅
echo $variabileLocale;  // ❌ Undefined variable