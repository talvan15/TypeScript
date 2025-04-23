function verificarVoto(idade: number): string{
    if(idade < 16){
        return "Não pode votar";
    }
    else if(idade >= 16 && idade < 18 || idade > 70){
        return "Voto opcional";
    }
    else{
        return "Voto obrigatório";
    }
}

let idade_voto: number = 18;

console.log(verificarVoto(idade_voto));