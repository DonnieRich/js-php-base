<?php
class Persona {
    public $nome;
}

$p1 = new Persona();
$p1->nome = "Mario";

$p2 = $p1; // Copia il riferimento all'oggetto
$p2->nome = "Luigi";

echo $p1->nome; // "Luigi" (entrambi puntano allo stesso oggetto)