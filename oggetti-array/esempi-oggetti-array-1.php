<?php

// Array associativo
$utenteArray = ["nome" => "Sara", "età" => 31];
echo $utenteArray["nome"]; // Sara

echo "<br>";

// Oggetto
$utenteObj = new stdClass();
$utenteObj->nome = "Sara";
$utenteObj->età = 31;
echo $utenteObj->nome; // Sara

echo "<br>";

// Oggetti vengono passati per riferimento (come in JS)
$nuovoUtente = $utenteObj;
$nuovoUtente->nome = "Andrea";

echo $utenteObj->nome;
