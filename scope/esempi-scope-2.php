<?php
$variabileGlobale = "Sono globale";

$callable = function () use ($variabileGlobale) {
    $variabileLocale = "Sono locale";
    echo $variabileGlobale; // ✅
    echo $variabileLocale;  // ✅
};

$callable();