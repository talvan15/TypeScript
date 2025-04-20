const notas: Array<number> = [10,20,30,40]

let soma: number = 0;
for(const numero of notas){
    soma += numero;
}

const media: number = soma / notas.length;
console.log("A média é: " + media);