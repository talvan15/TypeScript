function vetrificarIdade(idade: number): void{
            if(idade < 12){
                console.log("Criança");
            }
            else if(idade >= 12 && idade <= 17){
                console.log("Adolescente");
            } else{
                console.log("Adulto");
                }
}

const idade_pesoa: number = 16

vetrificarIdade(idade);