<?php
$names = ['Mario', 'Carla'];

$newNames = ['Francesca', ...$names, 'Luigi'];

var_dump($newNames);

echo "<br>";

$options = [
	'theme' => 'light',
	'orientation' => 'landscape',
];

$updatedOptions = [
	'volume' => 75,
	'theme' => 'dark',
];

var_dump([...$options, ...$updatedOptions]);