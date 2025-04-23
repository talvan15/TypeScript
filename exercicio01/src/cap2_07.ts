interface Aluno {
    nome: string;
    notas: number[];
    frequencia: number;
}

function calcularMedia(notas: number[]): number {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

function avaliarAluno(aluno: Aluno): void {
    const media = calcularMedia(aluno.notas);
    console.log(`Nome: ${aluno.nome}`);
    if (aluno.frequencia < 75) {
        console.log("Resultado: Reprovado por falta");
    } else if (media >= 7) {
        console.log("Resultado: Aprovado");
    } else if (media >= 5) {
        console.log("Resultado: Recuperação");
    } else {
        console.log("Resultado: Reprovado por nota");
    }
}

const alunos: Aluno[] = [
    { nome: "Talvan", notas: [8, 7, 9], frequencia: 90 },
    { nome: "Lucas", notas: [6, 5, 5], frequencia: 80 },
    { nome: "Ana", notas: [4, 3, 5], frequencia: 85 },
    { nome: "Maria", notas: [9, 8, 10], frequencia: 70 }
];

for (const aluno of alunos) {
    avaliarAluno(aluno);
}
