"use strict";
const notas = [10, 20, 30, 40];
let soma = 0;
for (const numero of notas) {
    soma += numero;
}
const media = soma / notas.length;
console.log("A média é: " + media);
