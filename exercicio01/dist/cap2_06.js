"use strict";
function notaAprovacao(nota) {
    if (nota >= 7 && nota <= 10) {
        return "Aprovado";
    }
    else if (nota >= 5 && nota <= 6.9) {
        return "Recuperação";
    }
    else if (nota < 5) {
        return "Reprovado";
    }
    else {
        return "Nota inválida";
    }
}
let nota = 10;
console.log(notaAprovacao(nota));
