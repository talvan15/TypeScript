interface Produto{
    nome: string;
    emEstoque: boolean;
}

const produtos: Produto[] = [
    { nome: "Produto A", emEstoque: true },
    { nome: "Produto B", emEstoque: false },
    { nome: "Produto C", emEstoque: true },
    { nome: "Produto D", emEstoque: true },
]

console.log(`Os seguints produtos estão disponíveis!`);
for(let i of produtos){
    if(i.emEstoque){
        console.log(i.nome);
    }
}