"use strict";
function verificarAprovacao(alunos) {
    for (let aluno of alunos) {
        let soma = 0;
        for (let nota of aluno.notas) {
            soma += nota;
        }
        const media = soma / aluno.notas.length;
        if (media >= 7) {
            console.log(`${aluno.nome} - ${media.toFixed(2)} - Aprovado`);
        }
        else {
            console.log(`${aluno.nome} - ${media.toFixed(2)} - Reprovado`);
        }
    }
}
const alunosTurma_A = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] },
];
verificarAprovacao(alunosTurma_A);
