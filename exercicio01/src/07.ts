class Livro {
    titulo: string;
    autor: string;
    paginas: number;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    informacoes(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`;	        
    }

    
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 300);
console.log(livro1.informacoes()); // "Título: Dom Casmurro, Autor: Machado de Assis, Páginas: 300"
 // "Título: Dom Casmurro, Autor: Machado de Assis, Páginas: 300"
