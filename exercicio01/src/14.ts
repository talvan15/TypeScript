function apresentar(pessoa: Pessoa): void{

    console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`);
}
interface Pessoa {
    nome : string;
    idade: number;
    profissao: string
}

let pessoa1: Pessoa = {
    nome: "Talvan",
    idade: 20,
    profissao: "Estudante",
}

apresentar(pessoa1);
