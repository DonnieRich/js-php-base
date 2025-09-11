const { somma, PI, Calcolatrice } = require("./utils/math");

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

document.querySelector(".somma").innerHTML = somma(4, 5);
document.querySelector(".pi").innerHTML = PI;

const calcolatrice = new Calcolatrice();

document.querySelector(".calcolatrice").innerHTML = calcolatrice.moltiplica(
  4,
  5
);
