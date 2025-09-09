<?php
$y = 1;

$fn1 = fn($x) => $x + $y;

$fn2 = function ($x) use ($y) {
    return $x + $y;
};

var_dump($fn1(3));	// 4
var_dump($fn2(3));	// 4