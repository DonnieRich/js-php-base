<?php
var_dump(0 == "0");		// ✅ true
var_dump(0 == "");		// ❌ false
var_dump("foo" == 0);	// ❌ false
var_dump(null == "");	// ✅ true
var_dump(null === "");	// ❌ false

// In versioni più vecchie di PHP (es. 5.6) il comportamento è differente