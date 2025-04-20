"use strict";
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    informacoes() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`;
    }
}
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 300);
console.log(livro1.informacoes()); // "Título: Dom Casmurro, Autor: Machado de Assis, Páginas: 300"
// "Título: Dom Casmurro, Autor: Machado de Assis, Páginas: 300"
