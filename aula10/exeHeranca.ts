/*class ItemBiblioteca {
    titulo: string
    dataDePublicacao: string 
    constructor(titulo: string, dataDePublicacao: string){
        this.titulo = titulo 
        this.dataDePublicacao = dataDePublicacao 
    }
    
    obeterInformacao(): string{
        return `Informações: ${this.titulo}, ${this.dataDePublicacao}`
    }
}

class Livro extends ItemBiblioteca{
    autor:  string 
    ISBN: number
    numeroDePaginas: number
    genero: string

    constructor(autor: string , ISBN: number, numeroDePaginas: number, genero: string, titulo: string, dataDePublicacao: string ){
        super(titulo, dataDePublicacao)
        this.autor = autor
        this.ISBN = ISBN
        this.numeroDePaginas = numeroDePaginas
        this.genero = genero
    }
    obeterInformacao(): string {
       return `Informações: Titulo:${this.titulo}; Data de publicação${this.dataDePublicacao}; Autor:${this.autor}; ISBN: ${this.ISBN}; Numero de paginas: ${this.numeroDePaginas}; Genero: ${this.genero}`
    }
}

class Revista extends ItemBiblioteca {
    editora:  string 
    ISSN: number
    numeroDeEdicoes: number

    constructor(editora: string , ISSN: number, numeroDeEdicoes: number, titulo: string, dataDePublicacao: string){
        super(titulo, dataDePublicacao)
        this.editora = editora
        this.ISSN = ISSN
        this.numeroDeEdicoes = numeroDeEdicoes
    }
    obeterInformacao(): string {
        return `Informações: Titulo:${this.titulo}; Data de publicação${this.dataDePublicacao}; Editora:${this.editora}; ISSN: ${this.ISSN}; Numero de edições: ${this.numeroDeEdicoes}.`
     }
}

class Usuario {
    nome: string 
    matricula: number
    tipo: string 
    itensEmprestados = [] = []
    constructor(nome: string, matricula: number, tipo: string){
        this.nome = nome
        this.matricula = matricula
        this.tipo = tipo
    }
}

class Emprestimo {
    dataDeEmprestimo: string
    dataDeDevolucao: string 
    usuario: string
    itemEmprestado: String

    constructor(dataDeEmprestimo: string, dataDeDevolucao: string, usuario: string, itemEmprestado: string){
        this.dataDeEmprestimo = dataDeEmprestimo
        this.dataDeDevolucao = dataDeDevolucao
        this.usuario = usuario
        this.itemEmprestado = itemEmprestado
    }
}


const bio = new ItemBiblioteca("guilherem" , "24/02/12")
const naruto = new Livro("kishiumoto", 2009, 2000, "anime", "naruto", "10/11/1996")
console.log(bio.obeterInformacao())  
console.log(naruto.obeterInformacao())*/