<?php
// Copia per valore
$a = 10;
$b = $a;
$b = 20;

echo $a; // 10 (indipendente)

// Copia per riferimento
$x = 10;
$y = &$x; // $y punta a $x
$y = 20;

echo $x; // 20 (stesso riferimento)