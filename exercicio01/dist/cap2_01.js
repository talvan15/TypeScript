"use strict";
function vetrificarIdade(idade) {
    if (idade < 12) {
        console.log("Criança");
    }
    else if (idade >= 12 && idade <= 17) {
        console.log("Adolescente");
    }
    else {
        console.log("Adulto");
    }
}
const idade_pesoa = 16;
vetrificarIdade(idade);
