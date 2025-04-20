export interface Aluno {
    nome: string;
    matricula: number;
    ativo: boolean;

}

const aluno1: Aluno = {
    nome: "João",
    matricula: 123456,
    ativo: true
}

console.log(aluno1);