<?php

$arr = [1, 2, 3];

foreach ($arr as $value) {
    echo $value . "<br>";
}

foreach ($arr as $index => $value) {
    echo "$index => $value <br>";
}

for ($i = 0; $i < count($arr); $i++) {
    echo $arr[$i] . "<br>";
}

$person = [ "name" => "Donnie", "age" => 30 ];
foreach ($person as $key => $value) {
    echo "$key => $value <br>";
}

class User {
    public $name = "Donnie";
    public $age = 30;
}

$user = new User();
foreach ($user as $prop => $val) {
    echo "$prop => $val <br>";
}