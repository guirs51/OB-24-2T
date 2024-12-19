class Livro {
    titulo: string
    autor: string
    isbn: string
    quantidadePaginas: number

    constructor(titulo: string, autor: string, isbn: string, quantidadePaginas: number){
        this.titulo = titulo
        this.autor = autor
        this.isbn = isbn
        this.quantidadePaginas = quantidadePaginas
    } 
}

class Autor {
    nome: string 
    nacionalidade: string 

    constructor(nome: string, nacionalidade: string){
        this.nome = nome
        this.nacionalidade = nacionalidade
    }
}

class Usuario{
    nome: string
    matricula: number

    constructor(nome: string, matricula: number){
        this.nome = nome
        this.matricula = matricula
    }
}

class Emprestimo {
    dataDoEmprestimo: string
    dataDaDevolucao: string
    livro :Livro
    usuario: Usuario 

    constructor(dataDoEmprestimo: string, dataDaDevolucao: string, livro: Livro, usuario: Usuario){
         this.dataDoEmprestimo = dataDoEmprestimo
         this.dataDaDevolucao = dataDaDevolucao
         this.livro = livro
         this.usuario = usuario
    }
}