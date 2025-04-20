function CalcularAreaRetangulo(base: number, altura: number): number{
    return base * altura;
}

const base: number = 10;
const altura: number = 6;

console.log(`Altura: ${altura}, Base: ${base}, Area: ${CalcularAreaRetangulo(base, altura)}`);