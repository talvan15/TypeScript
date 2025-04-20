"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alunos = [
    { nome: "João", matricula: 123456, ativo: true },
    { nome: "Maria", matricula: 654321, ativo: false },
    { nome: "Pedro", matricula: 789012, ativo: true },
    { nome: "Ana", matricula: 345678, ativo: false }
];
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].ativo) {
        console.log(`O aluno ${alunos[i].nome} está ativo! `);
    }
}
