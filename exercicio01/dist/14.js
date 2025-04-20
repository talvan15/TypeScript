"use strict";
function apresentar(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
}
let pessoa1 = {
    nome: "Talvan",
    idade: 20,
    profissao: "Estudante",
};
apresentar(pessoa1);
