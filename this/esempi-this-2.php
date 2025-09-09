<?php

class Bottone {
    public $label = "Salva";

    public function click() {
        return "Hai cliccato: {$this->label} <br>";
    }

    public function getClickCallback() {
        return function() {
            return "Hai cliccato: {$this->label} <br>";
        };
    }
    
    public function getArrowCallback() {
    	return fn () => "Hai cliccato {$this->label} <br>";
    }

}

function registraEvento($callback) {
	echo "Evento registrato";
	echo "<br>";
	echo $callback();
}

$b = new Bottone();

// Chiamata diretta: $this è l'istanza di Bottone
$b->click(); // Hai cliccato: Salva

registraEvento([$b, "click"]);
// Hai cliccato: Salva

registraEvento($b->click(...)); // First class callable syntax (PHP 8.1)

// Callback come closure restituita da un metodo: $this rimane l'oggetto
$callback = $b->getClickCallback();
$callback(); // Hai cliccato: Salva

registraEvento($callback);
// Hai cliccato: Salva

$callback = $b->getArrowCallback();
registraEvento($callback);
// Hai cliccato: Salva
