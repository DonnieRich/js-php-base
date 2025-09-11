import "./styles.css";

import Calcolatrice from "./utils/math";
import { somma, PI } from "./utils/math";

// alternativa
// import Calcolatrice, { somma, PI } from "./utils/math";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

document.querySelector(".somma").innerHTML = somma(2, 4);
document.querySelector(".pi").innerHTML = PI;

const calcolatrice = new Calcolatrice();
document.querySelector(".calcolatrice").innerHTML = calcolatrice.moltiplica(
  2,
  6
);
