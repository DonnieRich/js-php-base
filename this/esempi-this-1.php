<?php
class Persona {
    public $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function saluta() {
        echo "Ciao, $this->nome!";
    }
    
    public function valoreThis() {
    	var_dump($this);
    }

}

$mario = new Persona("Mario");
$mario->saluta(); // Ciao, Mario!
echo "<br>";
$mario->valoreThis();
