function identificarTipo( n: string|number): string {
    if (typeof n === "string"){
        return `O valor ${n} é uma string`;
    }
    else if (typeof n === "number"){
        return `O valor ${n} é um number`;
    } else {
        return `O valor ${n} não é nem string nem number`;
    }
}

const num1: string = "10";
const num2: number = 10;
console.log(identificarTipo(num1));
console.log(identificarTipo(num2));