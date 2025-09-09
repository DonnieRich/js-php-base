<?php
function saluta($nome = "Ospite") {
    echo "Ciao, $nome!";
}
saluta();       // "Ciao, Ospite!"
saluta("Mario");// "Ciao, Mario!"