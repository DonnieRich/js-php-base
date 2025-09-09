function saluta() {
    "use strict";
    console.log(this); // undefined (strict mode)
}
saluta();